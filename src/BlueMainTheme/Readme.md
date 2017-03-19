Theme Examples

```
<section>
    <p>Notice we havent' used a theme yet, so its just default Avatar</p>
    <Avatar><i className="fa fa-github"></i></Avatar>
    
    <BlueMainTheme>
        <div>
            <p>Now we are in a Blue Theme section. All children regular Avatar components will change background to blue</p>
            <Avatar><i className="fa fa-github"></i></Avatar>
            
            <p>SecondaryAvatar looks for theme.secondary, not theme.main color change, so in this case it stays red.</p>
            <SecondaryAvatar><i className="fa fa-github"></i></SecondaryAvatar>
        </div>
    </BlueMainTheme>
</section>

```