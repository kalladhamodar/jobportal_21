(function() {
    'use strict';
    window.addEventListener('load', function() {
        
        var forms = document.getElementsByClassName('form-container');
        
        var validation = Array.prototype.filter.call(forms, function(form) {
        });
    }, false);
})();


const Data = e => {
    
    let formData = {
        req_name: document.getElementById('req_name').value,
        date: document.getElementById('date').value,
        Position_title: document.getElementById('Position_title').value,
        role: document.getElementById('role').value,
        responsibility: document.getElementById('responsibility').value,
        Location: document.getElementById('Location').value,
        position_type: document.getElementById('position_type').value,
        posting_type: document.getElementById('posting_type').value,
        jobid: document.getElementById('jobid').value


    }
    localStorage.setItem(formData.jobid,JSON.stringify(formData));
    console.log(formData)
    
    

    e.preventDefault();
}
