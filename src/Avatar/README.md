Avatar Examples

```
<section>
    <p>background color change with style prop</p>
    <Avatar style={{backgroundColor: 'deepskyblue'}}>
        <i className="fa fa-github"></i>
    </Avatar>

    <p>title prop gets truncated to 1st letter</p>
    <Avatar title="Nathan" />

    <p>icon beats title</p>
    <Avatar title="Nathan" icon={<i className="fa fa-github"></i>} />

    <p>image beats icon</p>
    <Avatar
        icon={<i className="fa fa-github"></i>}
        image="cat.jpg"
    />

    <p>image beats title</p>
    <Avatar title="Javier" image="cat.jpg" />

    <p>child beats parameters</p>
    <Avatar title="Nathan" image="cat.jpg">
        <i className="fa fa-github"></i>
    </Avatar>
    <Avatar title="Nathan" icon={<i className="fa fa-github"></i>}>
        <img src="cat.jpg"/>
    </Avatar>

    <p>image beats defaultImage</p>
    <Avatar image="nature.jpg" defaultImage="cat.jpg" />

    <p>defaultImage beats title</p>
    <Avatar title="Javier" defaultImage="nature.jpg" />

    <p>defaultImage will replace a image that fails to load</p>
    <Avatar image="badImage.jpg" defaultImage="chillgirl.jpeg" />

    <p>child string gets truncated to 1st letter</p>
    <Avatar>Nathan</Avatar>

    <p>child should be i, svg, img, or string </p>
    <Avatar><i className="fa fa-github"></i></Avatar>
 </section>

```