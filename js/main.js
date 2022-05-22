let tableConatiner = document.getElementById("tableBlock");

// Vertical Space
function vSpace() {
    //    
    let newHTMLTOappend = `<tr ><td align="left" height="30" class="extSpace v_space" id="spacer" onClick="get_vSpace_id(this.id)" style="position:relative"></td></tr>`
    let currentHTML = tableConatiner.getInnerHTML();
    tableConatiner.innerHTML = currentHTML + newHTMLTOappend;

    //
    let trs = document.getElementsByClassName("v_space");
    for (let i = 0; i < trs.length; i++) {
        let tr = trs[i] ;
        tr.setAttribute("id", "spacer"+ ( i + 1 ));
    }     

}

let lastUsed = null;
function get_vSpace_id(clicked_id){
    prevClicked = lastUsed;
    lastUsed = clicked_id;
    alert(lastUsed);

    // right panel show
    let vSpaceShow = document.getElementById("collapseOne");
    vSpaceShow.classList.add("show") ;

    // Live edit
    // const live_edit = `
    // <div class="active-container">
    //     <div class="active_effect"></div>
    //     <div class="circle"></div>
    // </div>`;
    // let edit_effect = document.getElementById(lastUsed);
    // edit_effect.insertAdjacentHTML('beforeend', live_edit);

    // Height Change
    let spaceInput = document.getElementById("spacerInput");
    spaceInput.addEventListener('input', () => {
        let v_spacer = document.getElementById(lastUsed);
        console.log(v_spacer);
        v_spacer.height = spaceInput.value;
    });
}

// Vertical Space end

// Main Head
function txtBlock() {
    let newTextAppend = `<tr>
                <td align="center">
                    <span class="topSize" id="head1" style="font-size:36px;color:#000000;font-weight:700;font-family:Poppins,Arial,sans-serif;line-height:54px;text-decoration: none;display: block;padding:0 10px;position: relative;" onClick="get_mHead_id(this.id)">Job Opportunity at Hilton</span>
                </td>
            </tr>`
    let currentTextHTML = tableConatiner.getInnerHTML();
    tableConatiner.innerHTML = currentTextHTML + newTextAppend;

    let head_txt = document.getElementsByClassName("topSize");
    for (let i = 0; i < head_txt.length; i++) {
        let tr = head_txt[i] ;
        tr.setAttribute("id", "head"+ ( i + 1 ));
    }     
}

let lastUsedHead = null;
function get_mHead_id(clicked_id_head){
    prevClickedHead = lastUsedHead;
    lastUsedHead = clicked_id_head;
    
    alert(lastUsedHead);

    let headTxtShow = document.getElementById("collapseTwo");
    headTxtShow.classList.add("show") ;

    // Live edit 
        // let check_ele = document.querySelector('active-container');

        // // var dd = document.body.contains(document.querySelector('active-container'));
        // // dd.remove;

        // function myFunction() {
        //     const list = document.getElementById(prevClickedHead);
        //     console.log(lastUsedHead + " Hi");

        //     if (list.hasChildNodes()) {
        //       list.removeChild(list.children);
        //     }
        //   }

        //   myFunction();

        // const live_edit_Head = `
        // <div class="active-container">
        //     <div class="active_effect"></div>
        //     <div class="circle"></div>
        // </div>`;
        // let edit_effectHead = document.getElementById(lastUsedHead);
        // edit_effectHead.insertAdjacentHTML('beforeend', live_edit_Head);   


        //     //If it isn't "undefined" and it isn't "null", then it exists.
        // // if(typeof(dd) != 'undefined' && dd != null){
        // //     alert('Element exists');
        // //     dd.remove();
        // // } else{
        // //     alert('Element does not exist');
        // //     const live_edit_Head = `
        // //     <div class="active-container">
        // //         <div class="active_effect"></div>
        // //         <div class="circle"></div>
        // //     </div>`;
        // //     let edit_effectHead = document.getElementById(lastUsedHead);
        // //     edit_effectHead.insertAdjacentHTML('beforeend', live_edit_Head);            
        // // }


        // // if(document.body.contains(document.querySelector('active-container'))){
        // //     alert('Element exists!');
        // // } else{
        // //     alert('Element does not exist!');
        // //     // Live edit
        // //     const live_edit_Head = `
        // //     <div class="active-container">
        // //         <div class="active_effect"></div>
        // //         <div class="circle"></div>
        // //     </div>`;
        // //     let edit_effectHead = document.getElementById(lastUsedHead);
        // //     edit_effectHead.insertAdjacentHTML('beforeend', live_edit_Head);
        // // }
        

    // Live edit end

    let headTxtInput = document.getElementById("txtInput");
    headTxtInput.addEventListener('input', () => {
        let headTxt = document.getElementById(lastUsedHead);
        headTxt.innerHTML = headTxtInput.value ;
    });

    let headTxtInput_fsize = document.getElementById("fSize1");
    headTxtInput_fsize.addEventListener('input', () => {
        let headTxt_fsize = document.getElementById(lastUsedHead);
        headTxt_fsize.style.fontSize = headTxtInput_fsize.value + "px";
    });

    let colorInput = document.getElementById("color");
    let hexInput = document.getElementById("hex");
    colorInput.addEventListener('input', () => {
        let color = colorInput.value;
        hexInput.value = color;
        document.getElementById(lastUsedHead).style.color = color;
    });


}

// Main Head end

// Sub Text 

function subTxtBlock() {
    let subTextAppend = `<tr>
                <td align="center" valign="middle">
                    <span class="txtSize" style="font-size:22px;color:#000000;font-family: 'Montserrat', sans-serif;line-height: 30px;font-weight: 400;display: block; padding: 0 10px ;">Shop without paying right now… <br></span>
                </td>
            </tr>`
    let currentSubTextHTML = tableConatiner.getInnerHTML();
    tableConatiner.innerHTML = currentSubTextHTML + subTextAppend;
}

// Sub Text end

// CTA  
function ctaBlock() {
    let newCtaAppend = `<tr>
                            <td align="center">
                                <table cellpadding="0" cellspacing="0" border="0" align="center" width="370" height="80" class="botCTA changeHeight" bgcolor="#000000" style="border-radius:8px;box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.24);" >
                                    <tr>
                                        <td align="center"  class="gCta" >
                                            <!--[if mso]><v:rect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="{{campaign_publisher_url}}" style="height:90px; width:370px;v-text-anchor:middle;font-family:Arial,sans-serif" stroke="f" fillcolor="#000000"><center><![endif]-->
                                            <a href="{{campaign_publisher_url}}" title="View Local Listings" style="color:#ffffff;display: inline-block; font-family:sans-serif; font-size:17px; font-weight:400; text-align:left; text-decoration:none; width:370px;height:80px; -webkit-text-size-adjust:none; vertical-align: middle;width: 100%;" class="botCTA changeHeight" ><span style="height:24px;width: 100%;display:block" class="reduceHeight"></span><span class="cta" style="font-size:23px; line-height:32px;color:#ffffff; font-family:Poppins, sans-serif;width:318px;text-align: left;padding-left:20px;display: inline-block;font-weight:800" align="left">VIEW LOCAL LISTINGS </span><span align="right" style="text-align: right;display: inline-block;vertical-align: top;" ><img src="arrow.png" align="center" width="15" height="20" style="border:none; vertical-align:middle; outline:none;text-align:right;padding:6px 0px" class="arrowImage"></span><span style="height:24px;width: 100%;display:block" class="reduceHeight"></span></a>
                                            <!--[if mso]></center></v:rect><![endif]-->
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>`
    let currentCtaHTML = tableConatiner.getInnerHTML();
    tableConatiner.innerHTML = currentCtaHTML + newCtaAppend;
}
// CTA  end

// imgBlock

function imgBlock() {
    let newImgAppend = `<tr>
                            <td align="center">
                            <img src="https://eoa-editor.s3.amazonaws.com/081ef8fc986d5577a27b8cf21eb5d0e656203a97%2FEmail-Chevrolet+Blazer-DF-v1-March21%2Fmain.jpg" width="598" style="border:none;outline:none;height: auto;font-size: 25px; color: #000000;font-weight: bold;" border="0" align="center" class="bgPic" alt="Hilton Jobs" vspace="0" hspace="0">
                            </td>
                        </tr>`
    let currentImgHTML = tableConatiner.getInnerHTML();
    tableConatiner.innerHTML = currentImgHTML + newImgAppend;
}

// imgBlock end

