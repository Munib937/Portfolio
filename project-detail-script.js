    async function loadProject() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id'); // example: ?id=1

  try {
    const res = await fetch('data/projects.json');
    const projects = await res.json();

    // convert id to number for safer comparison
    const project = projects.find(p => p.id == id);
    const container = document.getElementById('project-detail');

    if (project) {
      container.innerHTML = `
        <div class="project-detail">
          <h1 class="project-detail-heading">${project.title}</h1>
          <p class="project-detail-content"></p>

      <ul><br>
            <li><strong>Client Challenges:</strong>
            
                ${project.details.about}
            
            </li><br>

            <li><strong>Client Requirements:</strong>
          
                ${project.details.challenges
                  .map(item => `${item}`)
                  .join("")}
            
            </li><br>

            <li><strong>Our Solution:</strong>
            
                ${project.details.solutions
                  .map(item => `${item}`)
                  .join("")}
            
            </li><br>

            <li><strong>Outcome:</strong>
            
                ${project.details.outcome}
            </li><br>
            
              <li><strong>Reference:</strong>
          <ul>
              ${
                project.details.Reference
                  .map(link => `<li><a href="${link}" target="_blank">${link}</a></li>`)
                  .join("")
              }
           </ul>

            


           <section class="row true">
                <div class="nine columns">
                    <div class="coverflow top10 bot10" data-coverflow-position="2">
                        <a class="prev-arrow"></a>
                         
                          <a href="">

                                <img class="coverflow__image" data-coverflow-index="1" loading="lazy" src="${project.details.images[0]}"   
                                   border-radius:8px;">

                              <img class="coverflow__image" src="${project.details.images[1]}" 
                                   border-radius:8px;">
                            </a>
                               
                             
                               
                              <a class="next-arrow"></a>
                        </div>
                     
                    </div>
                </section>

                

      </ul>`;


    } else {
      container.innerHTML = `<h2>Project not found.</h2>`;
    }

  } catch (err) {
    console.error('Error loading JSON:', err);
    document.getElementById('project-detail').innerHTML =
      '<h2>Error loading project details.</h2>';
  }
}

loadProject();

//  <a href="${project.link}" target="_blank" class="btn">Visit Project</a>
            // <a href="projects.html" class="btn back">← Back to All Projects</a>
                      // <img src="${project.image}" alt="${project.title}" style="max-width:100%;border-radius:10px;">
                                // <p>${project.description}</p>


