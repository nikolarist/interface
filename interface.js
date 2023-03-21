// generate interface 
function generateInterface(listFile) {

    $("#interfaceBtn").css("display", "none")

    s = `
    <br>
    <br>
    <form id="box" action="https://proteinformatics.uni-leipzig.de/mutation_explorer/interface_post" method="post" enctype="multipart/form-data" target="_blank" style="margin-left: 20px">

        Select alignment <br>
        
        <select id='fileDropdownConv' name='alignment_link' onchange='changeSeqSelectionConv()'></select>
        <br>
        <br>

        <input type="submit">
    </form>
    `;
    $("#box").append(s);


    // add alignments to dropdown
    fetch(listFile)
        .then(response => response.text())
        .then(text => text.split("\n"))
        .then(files => {
            for (let i = 0; i < files.length; i++) {
                fsplit = `${files[i]}`.split("/");
                filename = fsplit[fsplit.length - 1];
                $("#fileDropdownConv").append(`<option value='${files[i]}'>${filename}</option>`);
            }
        });



    //changeSeqSelectionConv()


    var $inputs = $('input[name=pdb_conv],input[name=file_conv]');
    $inputs.on('input', function () {
        // Set the required property of the other input to false if this input is not empty.
        $inputs.not(this).prop('required', !$(this).val().length);
    });
}




function clearInput(el) {
    $(el).val("");
} 












/*
function changeSeqSelection() {
    file = $("#fileDropdown").children("option:selected").val();
    fetch(file)
        .then(response => response.text())
        //.then(text => console.log(text))
        .then(text => text.split("\n"))
        .then(lines => [lines[2].split(/[ ]+/)[0], lines[3].split(/[ ]+/)[0]])
        .then(arr => {
            $("#seqA").children().remove();
            $("#seqB").children().remove();
            for (let i = 0; i < arr.length; i++) {
                $("#seqA").append(`<option value='${arr[i]}'>${arr[i]}</option>`);
                $("#seqB").append(`<option value='${arr[i]}'>${arr[i]}</option>`);
            }
        });
}
*/

