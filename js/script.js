$(document).ready(function(){
    var itaImgLink = "http://www.roemheld.de/IT/Data/Images/Address/Italien.gif";
    var engImgLink = "http://www.roemheld.de/IT/Data/Images/Address/Grossbritanien.gif";
    var deuImgLink = "http://www.roemheld.de/IT/Data/Images/Address/Deutschland.gif";
    var fraImgLink = "http://www.roemheld.de/IT/Data/Images/Address/Frankreich.gif";

    var imgBtnSel = $('#imgBtnSel');
    var imgBtnIta = $('#imgBtnIta');
    var imgBtnEng = $('#imgBtnEng');
    var imgBtnDeu = $('#imgBtnDeu');
    var imgBtnFra = $('#imgBtnFra');

    var imgNavSel = $('#imgNavSel');
    var imgNavIta = $('#imgNavIta');
    var imgNavEng = $('#imgNavEng');
    var imgNavDeu = $('#imgNavDeu');
    var imgNavFra = $('#imgNavFra');

    var spanNavSel = $('#lanNavSel');
    var spanBtnSel = $('#lanBtnSel');

    imgBtnSel.attr("src",engImgLink);
    imgBtnIta.attr("src",itaImgLink);
    imgBtnEng.attr("src",engImgLink);
    imgBtnDeu.attr("src",deuImgLink);
    imgBtnFra.attr("src",fraImgLink);

    imgNavSel.attr("src",engImgLink);
    imgNavIta.attr("src",itaImgLink);
    imgNavEng.attr("src",engImgLink);
    imgNavDeu.attr("src",deuImgLink);
    imgNavFra.attr("src",fraImgLink);

    $( ".language" ).on( "click", function( event ) {
        var currentId = $(this).attr('id');

        if(currentId == "navEng") {
            imgNavSel.attr("src",engImgLink);
            spanNavSel.text("ENG");
        } else if (currentId == "navIta") {
            imgNavSel.attr("src",itaImgLink);
            spanNavSel.text("ITA");
        } else if (currentId == "navDeu") {
            imgNavSel.attr("src",deuImgLink);
            spanNavSel.text("DEU");
        } else if (currentId == "navFra") {
            imgNavSel.attr("src",fraImgLink);
            spanNavSel.text("FRA");
        }

        if(currentId == "btnEng") {
            imgBtnSel.attr("src",engImgLink);
            spanBtnSel.text("ITA");
        } else if (currentId == "btnIta") {
            imgBtnSel.attr("src",itaImgLink);
            spanBtnSel.text("ENG");
        } else if (currentId == "btnDeu") {
            imgBtnSel.attr("src",deuImgLink);
            spanBtnSel.text("DEU");
        } else if (currentId == "btnFra") {
            imgBtnSel.attr("src",fraImgLink);
            spanBtnSel.text("FRA");
        }

    });

    var mydata = data;
    console.log(mydata[0].day);
    console.log(mydata[0].month);
    console.log(mydata[0].year);
    console.log(mydata[0].band);
    console.log(mydata[0].location);
    console.log(mydata[0].web);
    console.log(mydata[0].ticket);
    console.log(mydata[0].currency);
    console.log(mydata[0].facebook);

    var concert = '<li><time datetime="' 
    + mydata[0].year 
    +'-' 
    + mydata[0].month 
    + '-' 
    + mydata[0].day
    + '">'
    + '<span class="day">'+ mydata[0].day +'</span>' 
    + '<span class="month">'+ mydata[0].month +'</span>' 
    + '<span class="time">'+ mydata[0].time +'</span>' 
    + '</time> <div class="info">' 
    + '<h2 class="title">'+ mydata[0].band +'</h2>'
    + '<p class="desc">'+ mydata[0].location +'</p>'
    + '<ul> <li style="width:50%;"><a href="'+ mydata[0].web +'">'
    +'<span class="fa fa-globe"></span> Website</a></li> <li style="width:50%;"><span class="fa fa-money"></span>'+ mydata[0].location + ' '+mydata[0].ticket +'</li> </ul>'



    console.log(concert);

});




/*


                                        <ul>
                                            <li style="width:50%;"><a href="http://www.theaterchur.ch"><span class="fa fa-globe"></span> Website</a></li>
                                            <li style="width:50%;"><span class="fa fa-money"></span> CHF 35.00</li>
                                        </ul>
                                    </div>
                                    <div class="social">
                                        <ul>
                                            <li class="facebook" style="width:33%;"><a href="#facebook"><span class="fa fa-facebook"></span></a></li>
                                            <li class="twitter" style="width:34%;"><a href="#twitter"><span class="fa fa-twitter"></span></a></li>
                                            <li class="google-plus" style="width:33%;"><a href="#google-plus"><span class="fa fa-google-plus"></span></a></li>
                                        </ul>
                                    </div>
                                </li>


*/