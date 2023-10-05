/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    /* Name */
    name : 'Eric Lloyd Bunag',

    /* Photo with attributes */
    photo : 'images/myPic_wk02.jpg',

    /* Favorite Foods List*/
    favoriteFoods : ['Pizza', 'Burgers', 'Lasagna', 'Pork Adobo', 'Sinigang', 'Fruit Salad'],
    
    /* Hobbies List */
    hobbies : ['Reading', 'Writing', 'Drawing', 'Video Games', 'Anime'],

    /* Places Lived DataList */
    placesLived : []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
    place: ['Metro Manila, Philippines', 'Davao del Norte, Philippines'].join(', '),
    length: ['13 years','9 years'].join(', ')
});

/* DOM Manipulation - Output */
document.querySelector('#name').textContent = myProfile.name;
document.querySelector('#photo').setAttribute('src' , myProfile.photo);
document.querySelector('#photo').setAttribute('alt' , myProfile.name);

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

let dl = document.createElement('dl');

myProfile.placesLived.forEach(placeObj => {
    let dt = document.createElement('dt');
    dt.textContent = placeObj.place;
    dl.appendChild(dt); 
    
    let dd = document.createElement('dd');
    dd.textContent = placeObj.length;
    dl.appendChild(dd);
});

document.querySelector('#places-lived').appendChild(dl);