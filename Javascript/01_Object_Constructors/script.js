function Book(title,author,pages,read){
    if(!new.target){
        throw Error("You must use the 'new operator to call the constructor of Book!");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        if(read == true){
            console.log(`${title} by ${author}, ${pages}, read`);
        } else {
            console.log(`${title} by ${author}, ${pages}, not read yet`);
        }
    };
}