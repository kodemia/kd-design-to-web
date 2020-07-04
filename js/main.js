const helloWorld = () => {
    console.log('HOLA A TODO LOS KODERS')
}

const scrollToSection = (sectionId) => {
   console.log("scrolling")
   $('html, body').animate({
        scrollTop: $(sectionId).offset().top
   },'fast')
}

var featuresArray = [
    {
        imgUrl:"img/illustration-features-tab-1.svg",
        featureTitle:"Bookmark in one click",
        featureDescription:"Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
    },
    {
        imgUrl:"img/illustration-features-tab-2.svg",
        featureTitle:"Intelligent search",
        featureDescription:"Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
    },
    {
        imgUrl:"img/illustration-features-tab-3.svg",
        featureTitle:"Share your bookmarks",
        featureDescription:"Easily share your bookmarks and collections with others. Create a shareable   link that you can send at the click of a button."
    }
] 

const setActiveFeature = ( event, featureIndex) => {
    $(".features-control").removeClass("active")
    $(event.target).addClass("active")
    $(".feature-img").attr('src',featuresArray[featureIndex].imgUrl)
    $(".feature-title").text(featuresArray[featureIndex].featureTitle)
    $(".feature-description").text(featuresArray[featureIndex].featureDescription)
}

const saveMail = () => {
    let userMail = $("#staticEmail").val();

    $.ajax({
        type: "POST",
        url: 'https://ajaxclass-1ca34.firebaseio.com/kd-design-to-web/mails/.json',
        data: JSON.stringify(userMail),
        success: function(response){
            console.log(response)
            getMails()
        }
    });
}

const getMails = () => {
    $.ajax({
        type: "GET",
        url: 'https://ajaxclass-1ca34.firebaseio.com/kd-design-to-web/mails/.json',
        success: function(response){
            console.log(response)
            printMails(response)
        }
    });
}

const printMails = data => {
    $(".mails-list").empty();
    for( key in data){
        console.log(data[key])
        $(".mails-list").append(
            `
                <li>${data[key]}</li>
            `
        )
    }
}



/*$('html, body').animate({
    scrollTop: $('#DIV_ID').offset().top - 20 
}, 'slow');*/