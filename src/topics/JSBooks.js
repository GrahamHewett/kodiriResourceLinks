import React from "react";
import Topic from '../components/Topic';
import ResourceLink from "../components/Link";

function JSBooks() {
	return (
		<Topic name="Books" parentId="javascript" index="1">
        	<ResourceLink text="Eloquent JavaScript" href="https://eloquentjavascript.net/"/>
        	<ResourceLink text="You Don't Know JS" href="https://github.com/getify/You-Dont-Know-JS/find/master"/>
        	<ResourceLink text="JavaScript The Good Parts" href="http://shop.oreilly.com/product/9780596517748"/>
        	<ResourceLink text="JS Design Patterns" href="https://addyosmani.com/resources/essentialjsdesignpatterns/book/"/	>
			<ResourceLink text="Douglas Crockford Talk" href="https://www.youtube.com/watch?reload=9&v=v2ifWcnQs6M"/>
		</Topic>
	);
}

export default JSBooks;