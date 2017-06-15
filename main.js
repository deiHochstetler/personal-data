function initApp() {
}


var selectedAssociate;
var updatedAssociates;

function associateIdWithPerson(selection) {
    console.log(selection.options);
    var associateId = parseInt(selection.options[selection.selectedIndex].text);
    selectedAssociate = associates.find(function(associate) {
        return associate.assocId === associateId;
    });

    updateOnBlur()
    updateAllInputs()

}

function updateOnBlur(){
  var inputs = Array.from(document.querySelectorAll(".text-input-container"))

  inputs.forEach(function(input){
    input.children[0].addEventListener('blur', function(event){
      var key = event.target.id
      selectedAssociate[key] = event.target.value
    })
  })
}

function populateForm(htmlId, attr, val) {
    document.getElementById(htmlId).setAttribute(attr, val)
}

function showSave() {
  document.getElementById("save").style.visibility = "visible";
}

function updateArray() {
  updateAllInputs()
  updatedAssociates = associates.slice()
  document.querySelector('.profile').reset()
}

function updateAllInputs(){
  populateForm('profileImage', 'src' ,           selectedAssociate.pic);
  populateForm('fname', 'value',                 selectedAssociate.fname);
  populateForm('lname', 'value',                 selectedAssociate.lname);
  populateForm('phnNbr', 'value',                selectedAssociate.phnNbr);
  populateForm('email', 'value',                 selectedAssociate.email);
  populateForm('addr1', 'value',                 selectedAssociate.addr1);
  populateForm('addr2', 'value',                 selectedAssociate.addr2);
  populateForm('city', 'value',                  selectedAssociate.city);
  populateForm('state', 'value',                 selectedAssociate.state);
  populateForm('zip', 'value',                   selectedAssociate.zip);
  populateForm('annivDt', 'value',               selectedAssociate.annivDt);
  populateForm('emerCntct', 'value',             selectedAssociate.emerCntct);
  showSave();
}
