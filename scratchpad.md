# Navigation Bar

* Sticky
* Links to  different sections of the page
* Collapses on window resize

## HTML

```html
<div class="wrapper">

    <!-- Nav bar -->
    <nav>
        <div class="logo">LOGO</div>
        <!-- Nav buttons -->
        <ul>
            <li><a  href="#about">About</a></li> 
            <li><a  href="#projects">Projects</a></li> 
            <li><a  href="#photos">Photos</a></li>  
            <li><a class="active" href="#contact">Contact</a></li>  
        </ul>
    </nav>
    <section class="sec1"></section>
    <section class="content">
        <p>Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it?
        Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No?
        Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.
        </p>
        <p>Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it?
        Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No?
        Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.
        </p>
        <p>Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it?
        Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No?
        Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.
        </p>
        <p>Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it?
        Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No?
        Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.
        </p>

    </section>
</div>    
```

## CSS

```css
/* ================================================= */
body {
    padding: 0px;
    margin: 0;
    font-family:'Raleway',sans-serif;
    overflow: auto;
}

/* ================================================= */
/* Main nav bar style (black is active when scrolled) */
nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0px 100px;
    box-sizing: border-box;
    transition: .3s;
}

nav.black {
    background: rgba(0,0,0,0.8);
    height: 50px;
    padding: 0px 100px;

}

/* ================================================= */
/* Nav logo */
nav .logo {
    padding: 22px 20px;
    height: 80px;
    float: left;
    font-size: 24px;
    transition: .3s;
    
}

nav.black .logo {
    color: #fff;
    line-height: 50px;
    padding: 0px 20px;
}

/* ================================================= */
/* Nav list */
nav ul {
    list-style: none;
    float: right;
    margin: 0;
    padding: 0;
    display: flex;
}

nav ul li{
    list-style: none;
}

nav ul li a {
    line-height: 80px;
    color: #151515;
    padding: 12px 30px;
    text-decoration: none;
    text-transform: uppercase;
    transition: .3s;
}

nav.black ul li a {
    line-height: 50px;
    color: #fff;
}

nav ul li a:focus {
    outline: none;
}


nav ul li a:hover {
    background: #f7a434;
    color: black;
}

nav ul li a.active {
    background: inherit;
    color: #f7a434;
}

/* ================================================= */
/* Background */
section.sec1 {
    width: 100%;
    height: 100vh;
    background: url(https://i.ytimg.com/vi/PW8tr4j1ZWE/maxresdefault.jpg);
    background-size: cover;
    background-position: center;

}

/* ================================================= */
/* Lorem ipsum */
.content {
    margin-top: 80px;
}

.content p {
    width: 900px;
    margin: 30px auto;
    text-align: justify;
    font-size: 20px;
    line-height: 30px; 
}
```

## JS

```js
$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    }
    else {
        $('nav').removeClass('black');
    }
});
```


# About Section

* Has profile picture
* Has description
* Profile pic flips to show contact links

## HTML

```html
<!-- About Section-->
<a name="about"></a>
<section class="section-about">

    <section class="title">

        <div>About</div>

    </section>

    <!-- Description -->
    <section class="console-about">

        <!-- Profile Pic -->
        <img src="assets/images/Macy.JPG" alt="Profile Pic" class="profile-pic">

        <!-- Description -->
        <div class="description" id="description">
        Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it?
        Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No?
        Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.
        </div>
        
    </section>
</section>
```

## CSS

```css
/* About section */
.section-about {
    width: 100%;
    height: 800px;
    border: 0px;
    padding: 100px 0px;
    margin: 0px;
    background: white;

}

/* 3096 x 867.844
100 padding */

/* About console */
.console-about {
    width: 960px;
    height: auto;
    background: #333;
    color: white;
    padding: 10px;
    margin: auto;
    overflow:auto;
    position: static;
}

/* Profile pic */
.profile-pic {
    width: auto;
    height: 250px;
    background: grey;
    color: white;
    font-size: 35px;
    float: left;
    text-align: center;

}

/* Description */
.description {
    width: 575px;
    height: 250px;
    background: #ffb147;
    color: #333;
    margin-left: 10px;
    font-size: 27px;
    float: left;
    text-align: center;
    overflow: hidden;

}
```

## JS

```

```


# Projects Section

* Has mini nav bar that shows certain file types
* Mini nav bar is centered
* Collapses on window resize
* Projects gallery
* Link to git repo 

## HTML

```html
<!-- Projects -->
<a name="projects"></a>
<section class="section-projects">

    <section class="title">

        <div>Projects</div>
        
    </section>


    <!-- Projects previews -->
    <section class="console-projects">
        
        <!-- Mini nav bar -->
        <section class="nav-bar-mini">

                <!-- Nav buttons -->
                <section class="nav-mini"> 
                
                    <a class="nav-btn">All</a>
                    <a class="nav-btn">Javascript</a>  
                    <a class="nav-btn">Node.js</a>  

                </section>
        </section>     
            
        <!-- Project Previews -->
        <div class="preview-proj" id="preview-proj">
            Project previews
        </div>
        
    </section>
</section>
```

## CSS

```css
/* Projects section */
.section-projects {
    width: 100%;
    height: 800px;
    border: 0px;
    padding: 100px 0px;
    margin: 0px;
    background: #c5c5c5;

}

/* Projects console */
.console-projects {
    width: 960px;
    height: auto;
    background: #333;
    color: white;
    padding: 10px;
    margin: auto;
    overflow:auto;
    position: static;
}

/* Nav Bar mini */
.nav-bar-mini {
    width: 100%;
    margin: 0px 0px 10px 0px;
    background: #ffb147;
    overflow: hidden;
    clear: left;
}

/* Mini nav bar buttons */
.nav-bar-mini a {
    background: #333;
    color: inherit;
    border: none;
    padding: 14px 16px;
    margin: auto;
    text-align: center;
    font-size: 20px;
    float: left;
}

/*     background: none;
    color: inherit;
    border: none;
    padding: 14px 16px;
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    float: left;
 */


/* Project Previews */
.preview-proj {
    width: 960px;
    height: 250px;
    background: white;
    color: black;
    font-size: 35px;
    float: left;
    text-align: center;

}

```

## JS

```

```


# Photos Section

* Photos gallery
* Photos slideshow

## HTML

```html
<!-- Photos -->
<a name="photos"></a>
<section class="section-photos">

    <section class="title">

        <div>Photos</div>
        
    </section>

    <!-- Photo gallery -->
    <section class="console-photos">

        <!-- Photo previews -->
        <div class="preview-photos" id="preview-photos">
            Photo previews
        </div>
    
    <!-- Link to flickr -->
    

    </section>
    
</section>
```

## CSS

```css
/* Photos section */
.section-photos {
    width: 100%;
    height: 800px;
    border: 0px;
    padding: 100px 0px;
    margin: 0px;
    background: white;

}

/* Projects console */
.console-photos {
    width: 960px;
    height: auto;
    background: #333;
    color: white;
    padding: 10px;
    margin: auto;
    overflow:auto;
    position: static;
}


/* Photos Previews */
.preview-photos {
    width: 960px;
    height: 250px;
    background: white;
    color: black;
    font-size: 35px;
    float: left;
    text-align: center;

}

```

## JS

```

```


# Contacts Section

* Links to different profiles via icon

## HTML

```html
<!-- Contact -->
<a name="contact"></a>
<section class="section-contact">

    <section class="title">

        <div>Contact</div>
        
    </section>

</section>
```

## CSS

```css
/* Contacts section */
.section-contact {
    width: 100%;
    height: 640px;
    border: 0px;
    padding: 100px 0px;
    margin: 0px;
    background: #424242;
}

/* ================================================= */
/* Header */
header {
    width: 100%;
    height: 800px;
    background: #ffb147;
    color: white;
    padding: 10px 0px;
    margin: 0px;
    overflow:auto;
    position: static;

}

/* Footer */
footer {
    width: 100%;
    height: 75px;
    background: #333;
    color: white;
    padding: 10px 0px;
    margin: 0px;
    overflow:auto;
    position: static;

}

```

## JS

```

```

