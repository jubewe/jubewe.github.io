let logging = true;
let currentimage = null;

function geid(id){return document.getElementById(id)};

function log(msg){
    if(logging){
        console.log(msg);
    }
};

async function resizeimage(){
    let el = geid("input_file");
    if(el.files && el.files[0]){
        let reader = new FileReader();
        reader.onload = (e) => {
            let imgheight = (geid("input_height").value.length > 0 ? geid("input_height").value : undefined);
            let imgwidth = (geid("input_width").value.length > 0 ? geid("input_width").value : undefined);
            if(geid("input_width_auto").checked){
                imgwidth = imgheight;
            }
            let image = new Image(imgwidth, imgheight);
            image.src = e.target.result;
            image.onload = () => {
                let resize_canvas = document.createElement('canvas');
	            resize_canvas.height = imgheight;
	            resize_canvas.width = imgwidth;
	            resize_canvas.getContext('2d').drawImage(image, 0, 0, imgwidth, imgheight);
	            geid("output_img").src = resize_canvas.toDataURL("image/png");
                geid("input_height").value = imgheight;
                geid("input_width").value = imgwidth;
                geid("output_original_size").innerText = `${image.width} x ${image.height}`;
                geid("output_size").innerText = `${imgwidth} x ${imgheight}`;
            }
            currentimage = image;
        }
        reader.readAsDataURL(el.files[0]);
    }
};

document.onload = setTimeout(() => {
    resizeimage();
    geid("input_file").onchange = resizeimage;
    geid("input_height").onchange = resizeimage;
    geid("input_width").onchange = resizeimage;
    geid("input_submit").onclick = resizeimage;
    geid("input_height_auto").onchange = resizeimage;
    geid("input_width_auto").onchange = resizeimage;
    
}, 1);