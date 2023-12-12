

class Recipes {
   
    constructor (recipe_name, recipe_image,areas,ingredients,method_para, youtube_link){
        this.recipe_name=recipe_name;
        this.recipe_image=recipe_image;
        this.areas=areas;
        this.ingredients=ingredients;//change to arrayarray
        this.method_para=method_para;
        this.youtube_link=youtube_link
    }

    // function 

}


const recipe1=new Recipes('Chocolate Raspberry Brownies','image/Chocolate Raspberry Brownies.jpg','America','ingredients','Heat oven to 180C/160C fan/gas 4. Line a 20 x 30cm baking tray tin with baking parchment. Put the chocolate, butter and sugar in a pan and gently melt, stirring occasionally with a wooden spoon. Remove from the heat. Stir the eggs, one by one, into the melted chocolate mixture. Sieve over the flour and cocoa, and stir in. Stir in half the raspberries, scrape into the tray, then scatter over the remaining raspberries. Bake on the middle shelf for 30 mins or, if you prefer a firmer texture, for 5 mins more. Cool before slicing into squares. Store in an airtight container for up to 3 days','https://www.youtube.com/embed/Pi89PqsAaAg?si=ll4I6GYpNIGQ-CHQ')

console.log(recipe1);
// Dom manipulation
 

const img_src=document.querySelector('.recipe_image');
const recipe_title=document.querySelector('.title');
const recipe_areas=document.querySelector('.areas');
const recipe_ingredients=document.querySelector('.ingredients');
const recipe_method_para=document.querySelector('.method_para');
const recipe_youtube=document.querySelector('.youtube_link')

img_src.src=recipe1.recipe_image;
recipe_title.innerHTML=recipe1.recipe_name;
recipe_areas.innerHTML=recipe1.areas;
recipe_ingredients.innerHTML=recipe1.ingredients;
recipe_method_para.innerHTML=recipe1.method_para;
recipe_youtube.src=recipe1.youtube_link;

