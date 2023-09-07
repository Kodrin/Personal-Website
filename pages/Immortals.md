P{Immortals of Aveum is a single-player first person magic shooter that tells the story of Jak as he joins an elite order of battlemages to save a world on the edge of abyss. The game was released on the 22nd of August 2023 on PC, PS5 and Xbox Consoles. I was brought on this project as a Senior Technical Artist to develop procedural and performance tooling both in Unreal and Houdini. For this game, the most interesting tool I developed was the Pivot Painter Tool for procedurally painting wind on any tree regardless of size and shape.}

H{Pivot Painter Wind Tool}
P{This Houdini pivot painter tool is meant to be used in conjunction with the pivot painter plugin in unreal engine. On the Houdini side, the idea is to take any 3D tree regardless of what 3D program it was built in and paint a tree hierarchy on mesh as well as create pivot points for branches and leaves that we will then use in unreal (in the form of textures) to drive wind across trees. You can see the results of the tool in-engine on the videos below.}

V{media/Immortals of Aveum/1.mp4}
V{media/Immortals of Aveum/2.mp4}

H{Breakdown}
I{media/Immortals of Aveum/1.png}
P{Each branch is sorted by generational hierarchy that starts at the trunk. Here, it is visualized by different colors, black for 0, red for 1, yellow for 2 and cyan for 3. Those colors represent the structure of the pivot painted mesh. This hierarchy needs to make sense before pluging anything into Unreal. Otherwise, you would get a tree that moves like a wombat on 10 espressos. Basically, doing this wrong will create a vertex spaghetti mess.}

I{media/Immortals of Aveum/2.png}
P{Here, we have the pivots themselves. Unreal's pivot painter plugin requires you to encode the position and normals of the pivots of every branch in the structure. This tells the plugin where each branch's pivot is so everything starts moving at the stem. But we are not done yet, each of the points needs to be facing the correct way. This is where encoding the normals for each point becomes important.}

I{media/Immortals of Aveum/3.png}
P{A simple intuitive way to encode the normals is by finding the pair of points that are the furthest from each other on any given piece of the mesh. This is where we start to create the lines that you see here. Each line represents a piece of the tree (trunk, branch or leaf). Once you get a line, calculating the normal for the pivot is as simple as subtracting the start point position from the end point position and then normalizing the resulting vector.}

H{The Algorithm}
P{Creating a pivot painted tree procedurally is tricky but definitely achievable with decent results. The algorithm I opted for when designing this tool was a nearest neighbour search algorithm and there are a few reasons for that. If the tree was created in a software like speedtree (as they were for our game), you could break apart the tree with a connectivity node in Houdini to identify all the different pieces. The idea here is that we want to see which leaf belongs to which branch by checking the vertices of a given piece against other piece that haven't had a hierarchy assigned to them.}

P{In very simple terms, we have a loop that does this:
<br>1- For every point with no hierarchy assigned, check its surroundings
<br>2- If their surrounding have a hierarchy assigned, assign their hierarchy to itself
<br>3- Increment the generation value and hierarchy of given point
<br>4- Repeat until everything is assigned!}
P{The algorithm does a few other things to make sure this works (e.g. clustering leaves together, using materials to map out different section among other things). But at its core, this is what happens behind the scene.}

I{media/Immortals of Aveum/6.png}
P{This is the tree as imported into Houdini before any processing is done on it.}
I{media/Immortals of Aveum/5.png}
P{We can quickly separate all the different pieces and we can now use the way this tree was generated to our advantage. But before we build the hierarchy, we need a start position for our algorithm to start on which means identifying the trunk of the tree.}
I{media/Immortals of Aveum/4.png}
P{To identify the trunk of any given tree, I just used a plane intersection at a certain height. This tell the algorithm that all the vertices of this piece are the root hierarchy and we should construct our hierarchy relative to it.}

H{The Result}
V{media/Immortals of Aveum/3.mp4}
V{media/Immortals of Aveum/4.mp4}



