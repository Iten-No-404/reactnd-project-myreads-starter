import React from 'react';
const Book = (props) => {
    function change_list(e,props)
    {
      const book = {
          "id": props.id,
          "title": props.title,
          "author": props.author,
          "coverURL": props.coverURL
      }
      props.addrmfns[0](book);
      if(e.target.value === "currentlyReading")
        {
          props.addrmfns[1](book);
        }
      else if(e.target.value === "wantToRead")
      {
        props.addrmfns[2](book);
      }
      else if(e.target.value === "read")
      {
        props.addrmfns[3](book);
      }
    }
    return (  
        <div className="book" id={props.id}>
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${props.coverURL})` }}></div>
          <div className="book-shelf-changer">
            <select onLoad={ () => {this.value = props.addrmfns[4]}} onChange={(e) => { change_list(e,props)}}>
              <option value="move" disabled>Move to...</option>
            {(props.addrmfns[4](props.id)==="currentlyReading")? 
            <option value="currentlyReading" selected>&#10003; Currently Reading</option>
            :<option value="currentlyReading" >Currently Reading</option>
            }
            {(props.addrmfns[4](props.id)==="wantToRead")? 
            <option value="wantToRead" selected>&#10003; Want to Read</option>
            :<option value="wantToRead">Want to Read</option>
            }
            {(props.addrmfns[4](props.id)==="read")? 
            <option value="read" selected>&#10003; Read</option>
            :<option value="read">Read</option>
            }
            {(props.addrmfns[4](props.id)==="none")? 
            <option value="none" selected>&#10003; None</option>
            :<option value="none">None</option>
            }
            </select>
          </div>
        </div>
        <div className="book-title">{props.title}</div>
        <div className="book-authors">{props.author}</div>
      </div>
    );
}
 
export default Book;