const Header = {
    get: {
        'Accept': "application/json",
        "Content-Type": "multipart/form-data",
        'Authorization': null as string | null
    }, 

    post: {
        "Content-Type": "application/x-www-form-urlencoded",
        'Accept': "application/json",
        'Authorization': null as string | null
    },

    put: {

        "Content-Type": "application/x-www-form-urlencoded",
        'Accept': "application/json", 
        'Authorization': null as string | null
    },

    delete: {
        "Content-Type": "application/x-www-form-urlencoded",
        'Accept': "application/json", 
        'Authorization': null as string | null
    }

}

export default Header;