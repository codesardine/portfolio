---
title: 'Why I Love Astro Framework'
description: 'Discover what I learned building my website with Astro, a framework that combines performance, flexibility, and ease—without needing to learn a new syntax.'
pubDate: 2024-09-26
tags: "Astro"
draft: false
---

## Astro: Bridging the Gap Between Client and Server

While building my own website with Astro, I discovered just how intuitive and powerful this framework is for creating fast, content-rich websites. Astro’s modern approach to web development, which prioritizes performance without sacrificing flexibility—and most importantly, without forcing us to learn yet another new, invented syntax—has truly impressed me. With its unique way of handling both client-side JavaScript and server-side TypeScript, Astro has quickly become one of my favorite tools.

### 1. Astro’s Unique File Structure

One of the first things I noticed when working with Astro is how the framework clearly separates server-side and client-side code. This separation ensures that only the essential JavaScript is sent to the browser, keeping the website lean and fast.

At the core of every Astro component is the frontmatter block, which is where all the server-side TypeScript (or JavaScript) logic lives. This block, enclosed by --- dashes, runs during the build process. Whether it’s fetching data or importing components, all the logic here is executed server-side and never sent to the client. It’s the perfect place to manage things like API calls or handle variables that will be used later in the component's HTML template.

Below the frontmatter, you can write your HTML, and if you need JavaScript for the browser, you can include it inside traditional <script> tags. The beauty of Astro is that this client-side JavaScript is only sent to the browser when absolutely necessary, giving you full control over performance.

### 2. Frontmatter Block: TypeScript Power at Your Fingertips

As I built my site, I quickly realized the potential of the frontmatter block. This is where Astro shines in keeping your server-side logic clean and separate from the client-side code. For me, it was the ideal place to fetch data, manage variables, and use TypeScript to ensure everything was type-safe and predictable.

This part of the Astro component only runs during the build process, so none of this logic ever reaches the browser, helping me keep the site fast and efficient. By using TypeScript in the frontmatter, I could confidently manage my data, knowing that type safety was in place throughout my development.

### 3. Client-Side Script Tags: Controlling Browser Behavior

Astro’s unique way of handling client-side scripts was a game-changer for me. Unlike traditional frameworks that often send unnecessary JavaScript to the browser, Astro allows you to control exactly when and how JavaScript is sent.

Through its standard <script> tags, Astro gives you flexibility while keeping things simple. Even better, Astro provides helpful directives like client:load, client:idle, and client:visible that let you control when the client-side JavaScript should execute. This is particularly useful when optimizing for performance, as you can defer or delay script execution until the user actually needs it.

This control over when scripts run made my website load faster while keeping it interactive where needed. Astro’s approach to JavaScript makes it a “zero-JS by default” framework, but still gives you the ability to add dynamic elements without sacrificing performance.

### 4. Combining the Best of Both Worlds

What I loved most while working with Astro is how effortlessly it blends server-side rendering and client-side interactivity. You can fetch data on the server, render static HTML for performance, and then “sprinkle” JavaScript where necessary to add interactive elements. Astro also makes it easy to include frameworks like React, Vue, or Svelte within your .astro files, giving you even more flexibility for your site’s interactive parts.

Astro handles the complexities of combining server-side and client-side logic for you, so you can focus on building the features that matter most, without worrying about sending too much unnecessary JavaScript to the client.

### 5. Astro Makes SEO and Performance a Breeze

While building my website, I noticed that Astro automatically provided a performance boost. Because Astro renders static HTML by default and avoids sending JavaScript unless required, it makes pages fast and highly optimized for SEO. Search engines can crawl static HTML much more easily, and users experience faster page load times with fewer heavy resources.

On top of that, Astro has built-in image optimization and other performance enhancements that I didn’t have to manually manage. This focus on delivering the smallest possible payload to the browser without sacrificing functionality has been a massive win.

If you’re looking for a framework that prioritizes speed and simplicity, while still offering flexibility, Astro is definitely worth checking out.