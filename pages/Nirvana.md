Nirvana was a renewal project at the Odaiba exhibition in Tokyo which featured a pre-rendered mosaic on 8 vertical screens. For this, me and <a href="https://twitter.com/sakope">Sakota Yoshiaki</a> were tasked with transforming the work from pre-rendered animations to a real-time piece. My main contribution to this project was the creation of the real-time compositing and layering system. Sakota-san handled the flower simulations and interactions.

![Nirvana](media/Real-Time Nirvana/0.jpg)

Below is a breakdown of all the post-processing effects that were applied to the 3D models in real-time. The animals themselves along with the environment could only be rendered in screenspace on the flower grid. The compositing relied heavily on layer tagging certain parts of the models. I created a sky shader as a based for the background then applied an outline shader for the golden rims. I then create a cloud shader that would scroll along the canvas and then finished it off with a worn gold peeling effect at the end. 

![Nirvana](media/Real-Time Nirvana/7.jpg)

<div class="videoWrapper">
<iframe src="media/Real-Time Nirvana/p1.mp4" frameborder="0" allowfullscreen></iframe>
</div>

![Nirvana](media/Real-Time Nirvana/1.jpg)
![Nirvana](media/Real-Time Nirvana/2.jpg)
![Nirvana](media/Real-Time Nirvana/3.jpg)
<!-- ![Nirvana](media/Real-Time Nirvana/4.jpg) -->
<!-- ![Nirvana](media/Real-Time Nirvana/5.jpg) -->
<!-- ![Nirvana](media/Real-Time Nirvana/6.jpg) -->
