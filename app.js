import axios from "axios";
const GetData = async (userId) => {
    if(typeof(userId) != "number"){
        return "User Id must be a number!";
    }
    const {data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const { data: posts } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    return {...user,posts};
}
export default GetData;