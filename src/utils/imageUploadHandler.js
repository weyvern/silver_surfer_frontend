import axios from 'axios';

const imageUploadHandler = async (blobInfo, success, failure) => {
	let formData;
	formData = new FormData();
	formData.append('file', blobInfo.blob(), blobInfo.filename());
	const res = await axios.post('http://192.168.191.24:4000', formData);
	const {
		status,
		data: { location }
	} = res;

	if (status !== 201) failure(`HTTP Error: ${status}`);
	success(location);
};

export default imageUploadHandler;
