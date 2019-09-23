function isMultiselect() {
    // return 1 if you need multiselect; 0 - if single select
    return 1;
  }
  function areaclicked(AreaID, ButtonID) {
    // function on click event of SVG element
    // AreaID: ID of a image element (SVG object), e.g. "path4507"
    selectDeselectArea(AreaID, ButtonID);
    // deselect other areas if no multiselect
    if (isMultiselect() != 1) {
      deselectOtherAreas(AreaID);
    }
  }
  function selectDeselectArea(AreaID, ButtonID) {
    // if AreaID is selected, it gets deselected. If AreaID is deselected, it gets selected
    var obj = document.getElementById(AreaID);
    var currentClass = obj.getAttributeNS(null, 'class'); 
    if (currentClass == "classRaahDefault") {
      selectArea(obj);
    } else {
      deselectArea(obj);
    }
    var obj2 = document.getElementById(ButtonID);
    var currentClass = obj2.getAttributeNS(null, 'class'); 
    if (currentClass == "circleDefault") {
      selectButton(obj2);
    } else {
      deselectButton(obj2);
    }
  }
  function selectArea(obj) {
    // selects the object (the SVG element) - sets 'selected' style for the area
    obj.classList.remove("classRaahDefault");
    obj.classList.add("classRaahSelected");

  }
  function deselectArea(obj) {
    // selects the object (the SVG element) - sets 'default' style for the area
    obj.classList.remove("classRaahSelected");
    obj.classList.add("classRaahDefault");
  }

  function selectButton(obj2) {
    // selects the object (the SVG element) - sets 'selected' style for the button
    obj2.classList.remove("circleDefault");
    obj2.classList.add("circleSelected");
  }
  function deselectButton(obj2) {
    // selects the object (the SVG element) - sets 'default' style for the button
    obj2.classList.remove("circleSelected");
    obj2.classList.add("circleDefault");
  }

  function deselectOtherAreas(AreaID) {
    // this function is used if you need single select. I.e. it deselects all areas except the AreaId
    var areas = document.getElementsByClassName('classRaahSelected');
    for (var i = 0; i < (areas.length); i++) {
      if (areas[i].getAttributeNS(null, 'id') != AreaID) {
        deselectArea(areas[i]);
      }
    }
  }