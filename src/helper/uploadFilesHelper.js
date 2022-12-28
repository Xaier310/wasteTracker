import axios from "axios";
const url = process.env.REACT_APP_url;

export async function uploadFile(file){
    const formData = new FormData();
    formData.append("file",file);
    formData.append("upload_preset",process.env.REACT_APP_cloudinary_preset);
    formData.append("folder",`WasteTracker/${window.location.hostname}`);
    const res = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_cloudinary_cloudname}/image/upload`,formData);

    return {
        url:res?.data?.url,
        public_id:res?.data?.public_id
    };
}

export async function deleteFile(public_id){
    try{
        if(!public_id) throw new Error("No public Id to delete Image");
        axios.post(`${url}deleteImage`,{publicId:public_id}).then((res)=>{
            console.log(res?.data?.deleted[public_id]);
        })
    }catch(err){
        alert(err);
    }
}