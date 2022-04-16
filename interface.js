// generate interface for conservation
function generateInterface(listFile) {

    $("#interfaceBtn").css("display", "none")

    s = `
    <form id="box" action="http://proteinformatics.uni-leipzig.de/mutation_explorer/submit" method="post" enctype="multipart/form-data">
        Alignment <br>
        
        <select id='fileDropdownConv' onchange='changeSeqSelectionConv()'></select>
        <br>
        <br>
        <br>

        Upload a PDB <br>

        <select id="seq"></select> <br>
        <br>

        <input id="pdbConv" name="pdb_conv" type="text" placeholder="pdb id" onchange='clearInput("#fileConv")'> <br>
        <input id="fileConv" name="file_conv" type="file" accept=".pdb" onchange='clearInput("#pdbConv")'>
        <br>
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
                $("#fileDropdownConv").append(`<option value='${files[i]}'>${files[i]}</option>`);
            }
        });



    changeSeqSelectionConv()

}




// generate interface for superimpose
function superInterface(listFile) {

    $("#superBtn").css("display", "none") // TODO: change id

    s = `
    <form id="box" action="http://proteinformatics.uni-leipzig.de/mutation_explorer/submit" method="post">
        Alignment <br>
        
        <select id='fileDropdown' onchange='changeSeqSelection()'></select>
        <br>
        <br>
        <br>

        Upload 1st PDB <br>

        <select id="seqA"></select> <br>
        <br>

        <input id="pdbA" name="pdb_a" type="text" placeholder="pdb id" onchange='clearInput("#fileA")'> <br>
        <input id="fileA" name="file_a" type="file" accept=".pdb" onchange='clearInput("#pdbA")'>
        <br>
        <br>
        <br>

        Upload 2nd PDB (optional) <br>

        <select id="seqB"></select> <br>
        <br>

        <input id="pdbB" name="pdb_b" type="text" placeholder="pdb id", onchange='clearInput("#fileB")'> <br>
        <input id="fileB" name="file_b" type="file" accept=".pdb" onchange='clearInput("#pdbB")'>
        <br>
        <br>

        <input type="submit">
    </form>
    `;
    $("#superbox").append(s);


    // add alignments to dropdown
    fetch(listFile)
        .then(response => response.text())
        .then(text => text.split("\n"))
        .then(files => {
            for (let i = 0; i < files.length; i++) {
                //fsplit = `${files[i]}`.split("/");
                //filename = fsplit[fsplit.length - 1];    TODO: remove path
                $("#fileDropdown").append(`<option value='${files[i]}'>${files[i]}</option>`);
            }
        });



    changeSeqSelection()
}




function clearInput(el) {
    $(el).val("");
} 



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


function changeSeqSelectionConv() {
    file = $("#fileDropdownConv").children("option:selected").val();
    fetch(file)
        .then(response => response.text())
        //.then(text => console.log(text))
        .then(text => text.split("\n"))
        .then(lines => [lines[2].split(/[ ]+/)[0], lines[3].split(/[ ]+/)[0]])
        .then(arr => {
            $("#seq").children().remove();
            for (let i = 0; i < arr.length; i++) {
                $("#seq").append(`<option value='${arr[i]}'>${arr[i]}</option>`);
            }
        });
}