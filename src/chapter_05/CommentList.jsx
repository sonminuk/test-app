import React from "react";
import Comment from "./Comment";

export default function CommentList(props) {
    return(
        <div>
            <Comment name = "손민욱" comment="안녕하세요" />
            <Comment name = "손민욱2" comment="안녕하세요!" />
            <Comment name = "손민욱3" comment="안녕하세요!!" />

        </div>
    );
}
