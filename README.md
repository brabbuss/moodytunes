>[Moody Tunes deployed site](https://brabbuss.github.io/moodytunes/)

---

### Moody Tunes
###### Find your tunes for a given mood  

---

![home page](https://user-images.githubusercontent.com/66697338/104397638-753e8e80-550a-11eb-995c-c34db257a3af.png)

*Homepage*


## Table of Contents
* [Introduction](#introduction)
* [Features](#features)
* [Reflection](#reflection)
* [Team](#team)


## Introduction

### Overview
Moody Tunes is a music recommendation engine that provides music recommendations based on a user's mood. Users are able to save songs into their 'Favorites' and view the information at a later time, or play the song directly from Spotify. 

Moody Tunes is a SPA built with React and designed to meet project requirements in the rubric laid out [here](https://frontend.turing.io/projects/module-3/stretch.html), a group projects designed specifically for Mod 3 class 2008FE front end engineering students. The project seeks to challenge the totality of learning of students up to this point, pulling together their core-stack knowledge of HTML, CSS, JS, DOM interaction and TDD (test driven development), and extending that knowledge to build out a React app and incorporate a new technology - in this case TypeScript.

The project emphasises React fundamentals, such as state management/synching across components, and the flow and management of asynchronous operations (both in production code, and inside of testing suites), pushing students to think carefully and critically about component architecture and modularity, and expected user flow and behavior. The nature of the project encourages employing professional 'soft' skills in the planning and project management stages - utilizing wireframing and mind-mapping, and managing project workflow with Issues and PRs through the **Agile** methodology on GitHub Project Board.

Lastly, be sure to click this here when you see it:
<details>
  <summary>**Under the Hood**</summary>
There's more info under here about the functionality being described!
</details>

### Tech Stack
* React
* JavaScript
* HTML
* CSS
* TypeScript
* Green Sock Animation Platform
* React Router
* Jest (TDD)
* REST API

## Features 

![mood submission](https://user-images.githubusercontent.com/66697338/104397652-796aac00-550a-11eb-8f64-4b7f7e0c07cc.gif)

*Homepage*

**Main Page**

The homepage provides users with a simple form to collect user's mood and music decade. Local storage allows a user to retain their 'favorites', so users have the option of viewing their favorites without going through the music recommendation flow. 

Music recommendations are gathered using the [Musicovery API](http://b2b.musicovery.com/). The API draws on a database of music where each track has assigned to it 'mood' values, which consist of two parameters - 'arousal' and 'valence'. These two parameters are based on research around mapping emotion on a circumplex model as seen below. Currently we have set canned values, however in the future we'd like to map emotion to all values and use sliders to adjust valence/arousal.

![circumplex space model](https://user-images.githubusercontent.com/66697338/104362520-21fc1a00-54d1-11eb-9f31-b1e269504019.png)

<details>
  <summary>**Under the Hood**</summary>

---

The Homepage itself is housed in the React `<App />` component, as you might expect. To implement a multi-page experience, we implemented the `<BrowserRouter/>` and the components thereof that allowed linking/routing `<Link />`, `<NavLink />` and `<Route />`. 
  
With normal functionality, what ends up rendering on the homepage inside of `<App>` are two components. From 'top' to 'bottom':

```
<NavBar />       // Is always visible
<Form />         // A container for the Banner and MovieCard components

```

The `useEffect` hook is employed inside of the `<App/>` component to check local storage for user favorites. That data is an array of all of `favoriteSong` objects - that data is mapped over to create multiple `<Favorite />` components inside of `<FavoritesView />`

---

</details>

![results](https://user-images.githubusercontent.com/66697338/104397637-753e8e80-550a-11eb-9282-fade445a3ce1.png)

*Results View*

**Results View** 

In this view the users are presented with song results that match the 'mood' and optional 'decade' parameters they selected in the previous screen. Results can be added to the favorites by clicking the star icon, and results can be played on spotify by clicking the spotify icon. To return back to the main view a user can click the home button or on the MoodyTunes title. 

![add fav song](https://user-images.githubusercontent.com/66697338/104397671-82f41400-550a-11eb-90da-d64cb0c7c3e0.gif)

![spotify](https://user-images.githubusercontent.com/66697338/104397981-22190b80-550b-11eb-8228-8bc205b14942.gif)

<details>
  <summary>**Under the Hood**</summary>

---

Favorites will be noted in search results by using the `useState` and `useEffect` hooks with the Result component. On mount, the component will check the list of favorited songs passed to it as a prop against its own ID. If a match exists, it will mark itself as a favorite and animate appropriately.
---

</details>

![favorites](https://user-images.githubusercontent.com/66697338/104397634-74a5f800-550a-11eb-83b3-a476254fc76e.png)

*Favorites*

**Favorites**

Favorites are populated with any results that have been added to the favorites. Local storage is used to persist favorite selections. Favorites can be removed by hovering over the favorite and selecting 'remove'.

![remove a song](https://user-images.githubusercontent.com/66697338/104397668-81c2e700-550a-11eb-82f2-4bfe6fa0abdc.gif)

## Reflection

#### Wins

* Implementing TypeScript across the app including TDD
* Implementing GreenSock Animation Platform to aid UX
* Implementing a proxy server for CORS workaround
* Site is responsive and functions on a mobile device without stylistic breaks
* Implementing React hooks

#### Challanges

* Mastering typescript

#### Future

* Dynamic range of valence/arousal that will translate to a mood
* Implementation of Spotify's actual API to interact with Spotify account
* Find songs similar to the mood of x song

## Team

<h4>Scott Brabson</h4>
<img src="https://avatars1.githubusercontent.com/u/66697338?s=460&u=3d2e338fdeb625c1940a87b1cfdb7ba6e7d16c5c&v=4" alt="Coding Magician"
 width="150" height="auto" style="float: left" />

*FE Engineering student at Turing School who has found no end to the joy that is speaking the language of JS.*

[GitHub Profile](https://github.com/brabbuss)

<h4>Demaceo Vincent Howard</h4>
<img src="https://avatars2.githubusercontent.com/u/62954974?s=400&u=b246587c21877b7fe4a4972e89ec98677d5c29d6&v=4" alt="Demaceo Vincent Howard"
 width="150" height="auto" style="float: left" />

[GitHub Profile](https://github.com/demaceo)

<h4>Bruce Gordon</h4>
<img src="https://avatars3.githubusercontent.com/u/68293135?s=400&u=775c1b148ea65fa5bdcbbb6dab936da52cd44959&v=4" alt="Bruce Gordon"
 width="150" height="auto" style="float: left" />

[GitHub Profile](https://github.com/bruce-gordon)
