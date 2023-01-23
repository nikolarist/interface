# interface

This code currently runs the interface on the AlignMe website (https://www.bioinfo.mpg.de/AlignMe/AlignMePW.html) that allows users to view two aligned structures with the MutationExplorer (https://proteinformatics.uni-leipzig.de/mutation_explorer/).


Instructions to forward alignments from a server to MutationExplorer

The most general case is that the alignment server creates a number of alignments.
The interface then allows the user to select one of the alignments to be forwarded for 3D structure epxloration using MutationExplorer.

The alignment creating server has to write a file 'alignments.txt' that contains the URL of every alignment that the user can select.
Example:
<pre>
https://SERVERNAME/SUB/alignment1.clw
https://SERVERNAME/SUB/alignment2.clw
...
</pre>

The interface will create a list containing: 'alignment1.clw', 'alignment2.clw', ...

The HTML of the alignment server has to contain the following lines:

<pre>
&lt;button id="interfaceBtn" onclick="generateInterface('alignments.txt')">MutationExplorer&lt;/button>

&lt;div id="box">&lt;/div>

<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/nikolarist/interface@latest/interface.js" ></script>
</pre>

This will create a button 'MutationExplorer' that opens a small form when clicked.



