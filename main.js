var doc = document.getElementById("document");
doc.onclick = addSpan;

var i = 1;

function addSpan(ev){var sel, range, html;
    /*unsure of this*/
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            /*get first range, there can possibly be multiple. not sure how as i got an error when trying to select multiple programaticly...*/
            range = sel.getRangeAt(0);

            /*if stat and end point is the same(there is no selection, the coursor have just been moved)*/
            if( range.collapsed ){
                console.log(range);

                /*get the index of the node you are working in.*/
                var index = range.startContainer.parentNode.getAttribute("data-index");
                if(i==1){
                    index = range.startContainer.getAttribute("data-index");
                }
                /*get the offset inside the node(in char)*/
                var offset = range.startOffset;
                console.log("index: " + index + " - offset: " + offset);

                /*create a span and append it inside the current node*/
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
        }
    } else if (document.selection && document.selection.createRange) {
        alert("not working, use ff or chrome");
    }
}


