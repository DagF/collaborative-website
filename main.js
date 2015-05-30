var doc = document.getElementById("document");
doc.onclick = addSpan;

var i = 1;

function addSpan(ev){var sel, range, html;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            console.log(range);

            var index = range.startContainer.parentNode.getAttribute("data-index");
            if(i==1){
                index = range.startContainer.getAttribute("data-index");
            }
            var offset = range.startOffset;
            console.log("index: " + index + " - offset: " + offset);

            var span = document.createElement('span');
            span.contentEditable = true;
            range.insertNode( span );
            span.innerHTML = '&#8203';
            span.setAttribute("data-index", ""+ i);

            range.setStartAfter(span);
            sel.removeAllRanges();

            sel.addRange(range);
            i++;
        }
    } else if (document.selection && document.selection.createRange) {
        alert("not working, use ff or chrome");
    }
}


