import React from "react";
import Link from "next/link";

function NavBar() {
    return (
    <nav className="navBar">
        <Link href="/">
        <a className="title">FullStack Blog</a>
        </Link>

        <ul>
            <li>
                <Link href="/articles">
                    <a>All Articles</a>
                    </Link> 
            </li>
        </ul>
    </nav>
    )
};


export default NavBar;