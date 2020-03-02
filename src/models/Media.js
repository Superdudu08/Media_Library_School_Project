export class Media {
    constructor(title,releaseDate,rating,img){
        this.title = title;
        this.releaseDate = releaseDate;
        this.rating = rating;
        this.img = img;
    }
    
    /**
     * Create an HTML element with classes
     */
    createElement(tag, classes = null) {
        let element = document.createElement(tag)
        if(classes instanceof Array){
            for (const clas of classes) {
                element.classList.add(clas)
            }
        }
        else{
             element.classList.add(classes)
        }
        return element
    }

    createBaseDiv(){
        const div =this.createElement("div","mediaItem")
        //Add the title
        let title = document.createElement("h3")
        title.innerHTML = this.title;
        div.appendChild(title);
        //Add the picture
        let img = document.createElement("img")
        img.src = this.img;
        div.appendChild(img)
        //Create the mediaContent div
        let mediaContent = this.createElement("div","mediaContent")
        //Create the date+rating div
        let dateRatingDiv = this.createElement("div","flexRowDiv")
        //Add the date
        let date = document.createElement("p")
        date.appendChild(this.createElement("i",["far","fa-calendar"]))
        date.innerHTML += " " + new Intl.DateTimeFormat('fr-FR').format(this.releaseDate)
        dateRatingDiv.appendChild(date)
        //Add the rating
        let rating = document.createElement("p")
        rating.innerHTML = this.rating
        dateRatingDiv.appendChild(this.createRating())
        mediaContent.appendChild(dateRatingDiv)
        div.appendChild(mediaContent)
        return div;
    }

    /**
     * Turn the rating into a star based display
     */
    createRating(){
        let rating = document.createElement("p")
        for (let index = 0; index < 5; index++) {
            if(index<=(this.rating -1)){
                rating.appendChild(this.createElement("i",["fas","fa-star"]))
            }
            else{
                rating.appendChild(this.createElement("i",["far","fa-star"]))
            }
        }
        return rating
    }

}