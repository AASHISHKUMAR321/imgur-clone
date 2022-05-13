let index = 1;

const apiKey = '563492ad6f9170000100000147e407db80734d43857f1877cabe6ee4 '
const baseURL = `https://api.pexels.com/v1/curated?page=${index}&per_page=12`;

const getData = async() => {

    const response = await fetch(`https://api.pexels.com/v1/curated?page=${index}&per_page=12`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: apiKey
        }
    });
    const data = await response.json();
    console.log(data.photos);

    getPhoto(data.photos)




}
getData()


const photos = document.getElementById('photos');

let div;


const getPhoto = (data) => {




    data.map((e) =>

        {
            let div = document.createElement('div')
            div.setAttribute('id', 'photo')
            const img = document.createElement('img');
            div.append(img),

                img.src = e.src.original

            // photos.append(e.alt)
            photos.append(div)

        }



    )

}

function inc(value) {
    index = index + value;
    let divs = document.getElementById('photo');
    divs.remove()
    getData()
    console.log(index)
}

function dec(value) {

    if (index > 1) {
        index = index - 1
        let divs = document.getElementById('photo');
        divs.remove()
        getData()
    }
}