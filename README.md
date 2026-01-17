# React Components & Props Lab - Personal Blog

## Project Overview

This is a **personal blog website** built with React, designed to practice:

- Creating functional components
- Writing JSX
- Passing data dynamically through props
- Component composition
- Rendering lists of components
- Handling default prop values

The project demonstrates a simple component hierarchy and renders a blog with a **header, about section, and list of articles**.

---

## Component Tree


---

## Features

- **Header** displays the blog name dynamically via props.
- **About** section displays a blog logo and description via props.
- **ArticleList** renders multiple **Article** components from an array of posts.
- Each **Article** shows:
  - `<h3>` → title  
  - `<small>` → date (with a default of `"January 1, 1970"` if no date is provided)  
  - `<p>` → preview text
- Fully tested with **Vitest**, all tests passing (15/15).  

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/farhiyamohamed/react-components-props-vite-lab.git
cd react-components-props-vite-lab
