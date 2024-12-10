## Part 0: Overview
Site testing:

Key links:


FOR WAVE SCREENSHOTS, PLEASE SEE GOOGLE DOCS WRITE-UP LINKED BELOW



Google docs version of write-up: https://docs.google.com/document/d/1pSUzrGSyfOhEmRNqsnNoEDDd2yJztjr0q2zWG1jiZpI/edit?usp=sharing
Github repository: https://github.com/loganlewcmu/pui-hw-loganlew
Website: https://loganlewcmu.github.io/pui-hw-loganlew/final-project/ 

Testing dimensions:
Desktop: 1440 x 900; Tablet (portrait): 768 x 1024
Rationale: Through anecdotal conversations, I found that the target audience (travelers from late 30s to late 70s with higher disposable income) tends to plan vacations on their laptops and tablets, rather than on mobile devices.


## Part 1: Website Description

Describe your website (300 words).

Purpose:
I built a website that serves as a travel guide for visitors to St. Thomas, an island in the U.S. Virgin Islands. My client, who rents a vacation property on Airbnb (a condo called “Ritaville”), uses this website to support her efforts in attracting more guests. A future version of the site will include detailed descriptions of the property and the guest experience. This version focuses on answering: “What can I do in St. Thomas? How can I spend my time there?”

Information:
On the “Plan your trip” page, the site includes information about various activities one can pursue while there, including visiting well-known beaches, exploring cultural and commercial sites, and exploring the surrounding islands. It features visual information, text-based overview of what to expect, and planning tips about what visitors might not expect.

Interesting and engaging:
The site uses compelling visuals and helpful micro-interactions to draw users around the site. It centers the information on a map of St. Thomas, so that in addition to knowing what they’ll be doing, potential visitors can get oriented to the new geography.

Target audience:
Potential guests who are deciding whether to visit St. Thomas and/or deciding whether to stay at my client’s rental property; as well as confirmed guests looking for inspiration as they plan their stay.


## Part 2: User Interaction


1. “Coming soon” hover state | Hover over “Condo Overview” and “Welcome Guide”:
When users hover over these tabs on the menu, the text change to “Coming soon.” This offers a calming piece of feedback and avoids frustration or confusion caused by landing on an error page or pressing a button with no response.

2. “Book on Airbnb” hover state | Hover over “Book on Airbnb” button
When users hover over this button, the text turns to the color of Airbnb’s signature “Rausch” orange/pink. This signals to users that they will be moving to a different space (with different visual identity), and aims to get them excited about the booking process.

3. “Points of interest” hover state | Hover over items on map
The “Day trip inspiration” / “Plan your trip” page is centered around various points of interest distributed on the map. When users hover over them, they get an image-based preview of that experience (e.g., a sunset cruise for the “Go on a chartered boat tour” item). This is supported by highly-descriptive alt text to ensure accessibility. Users can click on the item to see more images and get more helpful information.

4. Easy exit from informational cards | When a point of interest card is selected, press area outside of card
This interaction aims to reduce effort spent navigating the site, specifically when exiting pop-up cards. In order to reduce the effort/time/focus required to select the “x” button in the top right corner of each informational card, users can select the area outside the card and return to the home screen.
                                                                                                                                                                                                         
## Part 3: External Tool

Describe what important external tool you used (JavaScript library, Web API, animations, or other). Following the bulleted list format below, reply to each of the prompts.

Name and how I used it:
I used CSS animations to create a warm welcome to my site. I created a CSS animation called slideInLeft, in which the key information (title and address of rental property) moves in horizontally and changes from low- to high-opacity. This animation is triggered on page load.

Rationale:
I chose this animation because it was easy to implement and effective.

How I used it:
See above.

What it adds to my website:
This animation gives users a warm welcome, as it is relatively slow, moves smoothly, which sets the tone for how users should feel when interacting with the website and going on vacation. Additionally, it helps draw user’s attention to key information about the site (the name and location of the condo).


## Part 4: Design Iteration

Describe how you iterated on your prototypes, if at all, including any changes you made to your original design while you were implementing your website and the rationale for the changes. (4-8 sentences max)

I simplified my original design concept, which included mockups for five distinct pages with various interaction patterns. Instead, I prioritized depth and strong execution over spreading resources thin.
On the “Day Trip Inspiration” / “Plan Your Trip” page, I simplified the layout and responsive behavior. Initially, I planned to combine a circular marker, text description, and connecting line for each point of interest, but making this layout responsive proved too complex and time-consuming. I opted for a simpler, more scalable design.


## Part 5: Implementation Challenge

What challenges did you experience in implementing your website? (2-4 sentences max)

My biggest challenge was ensuring that I was implementing the code efficiently. For instance, when I needed to make the site responsive, I created dummy HTML and CSS files, coded what the site would look like in the tablet dimensions (768 x 1024), then updated the original HTML, CSS, and JS files accordingly. In this instance and others, I tried to build in a way that mitigated errors and maximized speed, but it’s hard to know without working side-by-side with someone with more experience.

                                                                                                                                                                                                         
## Part 6: Generative AI Use and Reflection

Describe how you used Generative AI tools to create this final project (fill in the following information, write \~500 words in total).

                                                                                                                                                                                                         
Document your use of all GenAI tools — ChatGPT, Copilot, Claude, Cursor, etc. using the template below. Add/Delete rows or bullet points if needed, and replace Tool1/Tool2 with the name of the tool.

### Usage Experiences by Project Aspects

Feel free to edit the column \_ (other?) or add more columns if there's any other aspect in your project you've used the GenAI tools for.

                                                                                                                                                                                                                                                                                                                                                                                                               

For the following aspects of your project, edit the corresponding table cell to answer:
- *Usage*: Whether you used / did not use this tool for the aspect. Enter [Yes/No]
- *Productivity*: Give a rating on whether this tool makes your productivity for X aspect [1-Much Reduced, 2-Reduced, 3-Slightly Reduced, 4-Not Reduced nor Improved, 5-Slightly Improved, 6-Improved, 7-Much Improved].

| Tool Name | Ratings | design | plan | write code | debug | \_ (other?) |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| ChatGPT | Usage | No | No | Yes | Yes | Yes |
| Tool1 | Productivity | N/a | N/A | 6 | 6 | 5 |


### Usage Reflection

I used ChatGPT in three major ways: firstly, I used it to learn and implement new javascript functions, ensure code hygiene, and “phone-a-friend” debugging.

There were two functions in particular that ChatGPT was helpful in implementing: I used ChatGPT to draft a function that allows users to click between images within the “Day trip inspiration” informational cards - it proposed a helpful structure for creating an index of elements and cycling through this index with previous/next buttons. I also used it to finalize my “Coming soon” interaction. I was able to code the first half of the interaction (when user hovers over a list item, the contents of the item changes), however I was struggling to return the text to its original state, and asked ChatGPT to complete the code I had started.

When engaging with code that ChatGPT generated or altered, I always take a similar approach: I read the generated code from top to bottom and make sure I understand the functionality, and read the supporting documentation. I checked to ensure that the code fit well into my existing structure. There was a functionality that is not implemented in my final deliverable that demonstrates this principle. For context, when the display was tablet-sized, I wanted to add a card in the visuals stack that was not available on desktop (card had portrait dimensions and could be expanded to match the shape and size of the tablet). I knew the function needed to A) toggle the display settings for the card based on screen size, and B) integrate itself with the indexing function used to navigate between images. ChatGPT drafted a function that operated outside the bounds of my existing indexing function, which created a disconnected workflow. I chose not to implement this solution, because I wanted to ensure that the major functions were well-organized and internally complete.

Secondly, I used AI to improve file hygiene. At the midpoint in my project, I asked ChatGPT to scan and rename my html components to ensure that the naming conventions were consistent and extremely easy to recall (e.g., poi_marker and poi_listItem as classes, poi_marker_farmersMarket and poi_listItem_farmersMarket as ids).

Lastly, when I absolutely could not debug something myself, I worked with ChatGPT to identify root causes and determine how to refactor the code.

                                                                                                                                                                                                         
                                                                                                                                                                                                         
> Impact on your design and plan 
* It matched my expectations and plan in [FP2](#generative-ai-use-plan) in that … For example, 
  1. Tool1: Yes, it was helpful
  2. Tool2: N/A
* It did not match my expectations and plan in [FP2](#generative-ai-use-plan) in that … For example, 
  1. Tool1: N/A
  2. Tool2: N/A
* GenAI tool did/did not influence my final design and implementation plan because … For example, 
  1. Tool1: It did not influence my final design because I used it to support what I already wanted to do
  2. Tool2: N/A

> Use patterns
* I accepted the generations when …  For example, 
  1. Tool1: see my reflection above
  2. Tool2: 
* I critiqued/evaluated the generated suggestions by … For example, 
  1. Tool1: see my reflection above
  2. Tool2: 


> Pros and cons of using GenAI tools
* Pros
  1. Tool1: efficient, mostly accurate, gives comprehensive explanations of the mechanics and concepts
  2. Tool2:
* Cons
  1. Tool1: Does not explain things visually
  2. Tool2:


### Usage Log

Document the usage logs (prompts and chat history links) for the GenAI tools you used. Some tools may not have an easy way to share usage logs, just try your best! Some instructions for different tools:

1. [ChatGPT] https://chatgpt.com/share/67583be8-0308-800b-bdf7-3ecee9a775c1


---

# **FP3 \- Final Project Check-in**

Document the changes and progress of your project. How have you followed or changed your implementation & GenAI use plan and why? Remember to commit your code to save your progress.

## Implementation Plan Updates

- [ ] ...

## Generative AI Use Plan Updates

- [ ] ...

Remember to keep track of your prompts and usage for [FP4 writeup](#part-6-generative-ai-use-and-reflection).

---

# **FP2 \- Evaluation of the Final project**

FP2 write-up can be found here: https://docs.google.com/document/d/1MhgUcpGhl9D_l0DVCR14WoreXqAz0RPLXSisB4rUaAQ/edit?tab=t.0

Walkthroughs of post-feedback high-fi prototypes can be found here: https://www.loom.com/share/1f31acf45a664394b7de054e64854f49

# **FP1 \- Proposal for critique
FP1 - Proposal for Critique


IDEA 1

Image:
To see the sketch of image one, see slide 3 here: https://docs.google.com/presentation/d/1R7E8i3oO4yLGiivn7b5W50zyjD-ReS6gJMXxv-IPByA/edit#slide=id.g30dc2198312_0_118

Write-up:
The goal of this project is to simulate what it would be like if generative AI tools like ChatGPT, Google Gemini, etc. offered responses with visual information. Currently, responses are entirely text-based, which is a disservice users to the many users that are visual learners. This website would allow users to enter questions (using pre-loaded options), and would then display answers to said questions that contain both written and image- or gif-based content.

Users will interact with the website by askng questions: User selects a topic from pre-loaded dropdow, then select a sub-topic, then select a specific question (For example - Topic area 1: “I want to learn more about… cities…” → Option 1: “I want to learn more about city size” → Question A: “how big is New York City compared to Los Angeles?"). The website will engage users by providing responses, similar to GenAI chat interfaces like ChatGPT. However the responses will contain both text- and image-based content. Unlike ChatGPT, the responses will not be generated ad-hoc. Rather, each question will correspond with a pre-loaded response that will be called from a library.

I will use WCAG accessibility guidelines surrounding visual elements, assistive techology support, and cognitive accessibility to ensure that the site is usable, engaging, and desirable for a broad range of users.

I want my site to convey information that is more concrete and some that is conceptual. Concretely, I want to display information around 3 topics that I'm nerdy about, including: city/urban planning, air travel + transit; biology. On a conceptual level, I want this site to serve as a meditation or proposal on how GenAI tools might provide information in a more engaging and memorable way.


IDEA 2

Image:
To see the sketch of image one, see slide 4 here: https://docs.google.com/presentation/d/1R7E8i3oO4yLGiivn7b5W50zyjD-ReS6gJMXxv-IPByA/edit#slide=id.g30fa998f348_0_36

Write-up:
The goal of this site is to enhance a deliverable I built for an existing client. I work with a client who requested a PDF-based guest manual for her rental property, which she will send out to prospective and committed guests. However, PDFs lead to a poor user experience due to visual crowding, restrictions on providing progressive information, etc. So I want to build a website that offers the same content with the elevated user experience of a modern website.

Users will interact with the design via traditional interactions (clicks, scrolls, drags). I want to introduce interactions that are specifically useful for someone planning or on a trip (e.g., user can drag a trip recommendation into a saved folder or into a tool that allows them to send the item to family members via email or SMS).

I will use WCAG accessibility guidelines surrounding visual elements, assistive techology support, and cognitive accessibility to ensure that the site is usable, engaging, and desirable for a broad range of users. Because travel sites can be extremely information-dense, I'll pay close attention to reducing visual crowding on a given page, and harnessing progressive information via click-activated embedded pages and cards.

The most important information I want to provide to users is as follows: Firstly, the 101 information on how to get settled at the rental property (e.g., parking info, wifi info, emergency planning, etc.). Secondly, I want users who are feeling decision fatigue or intimated by trip planning to be able to look at the site and gain inspiration and inspiration for fun day trips.

IDEA 3

Image:
To see the sketch of image one, see slide 5 here: https://docs.google.com/presentation/d/1R7E8i3oO4yLGiivn7b5W50zyjD-ReS6gJMXxv-IPByA/edit#slide=id.g30fa998f348_0_65

Write-up:
The goal of this site is to display my design projects in a web-based portfolio (it currently exists as a PDF), which will help with my job application process.

I will use traditional interactions (e.g., click, scroll, etc.) to help users engage with the content. I will also use interactions that help highlight the spirit of each project (e.g., more abrupt/striking transitions to signal stages in the design process that were surprising or urgent; calmer transitions to signal a denoument or resolution).

I will use WCAG accessibility guidelines surrounding visual elements, assistive techology support, and cognitive accessibility to ensure that the site is usable, engaging, and desirable for a broad range of users. Because portfolios sites can be extremely information-dense, I'll pay close attention to reducing visual crowding on a given page, and harnessing progressive information via click-activated embedded pages and cards.

The most important information I want to provide to users is as follows: I want readers to understand the unique skills and perspective that my non-traditional background (consulting, strategy) has brought to my design process. secondly, I want readers to easily glean when I made a choice that was divergent or controversial, as well as the rationales and impacts of those decisions.


SUMMARY OF IN-CLASS CRITIQUE:

There were a few themes in the critique I received during lab. Firstly, classmates and instructor shared that my first idea might be difficult to implement from a technical perspective. Because the visual content would feature moving imagery, it could be difficult to code the visuals with true-to-life physics and movement patterns. Secondly, my classmates and instructor advised that there are challenges with building a site that approximates LLMs without behaving as an LLM itself. Because I plan to let users select from pre-loaded questions, and receive answers using pre-loaded data, it is likely that users will feel limited autonomy on the website.

On concept two, feedback from my classmates and instructor primarily centered around the potential benefits of building a website for an existing client. Firstly, I already have a pdf-version of the content. This could allow me to get a head-start on creating user stories, planning the site's information architecture and visual layout, and building/testing low-fi prototypes with users. Secondly, given the project timeline, I would hopefully be able to deliver my client an MVP by the end of the semester, and would have the space to iterate on this and build an incrementally better site after the course concludes. This would be constructive for my learning and for my client.

I did not receive in-class critique on my third website idea.

SYNTHESIS OF CRITIQUE AND NEXT STEPS:

The feedback about idea 2 (guest manual for client) is especially salient. I share my classmates' and instructor's sentiment that building a website for an existing client will accelerate my building process, deliver measurable value to real-world users, and facilitate my long-term learning. For these reasons, idea 2 feels like the strongest contender in terms of satisfying the needs of this specific project and I would follow my classmates'/instructors guidance to use my existing pdf as a source of content and inspiration for user stories. However, I'd ideally like to include this project in my portfolio for job applications. And given that I am not interested in the travel field, I need to determine if I could use idea 2 to highlight any skills / perspectives / accomplishments that are relevant to the companies I hope to apply to. I am concerned that selecting project 2 will not allow me to achieve this higher-order goal. There were no pieces of critique that needed to be dismissed for this idea.

Currently, the feedback regarding idea 1 (visual information in GenAI output) feels less implementable. This is because I believe I have a differing understanding of how the site will work and the resulting technical considerations vs. the understanding of my classmates and instructors (and resulting feedback during lab). I would ideally like to pursue this project, because it is more aligned with my professional goals (designing AI products). I need to first vet the technical feasibility.

For my next steps, I'd like to do two things: have a one-on-one conversation with my lab instructor to discuss idea 1 (visual information in GenAI output) in more detail and meet with a mentor to discuss the implications of me implementing idea 2 (guest manual for client). During my meeting with my instructor on idea 1, I plan to re-state my plan for the website, and develop a shared understanding regarding the technical requirements and potential challenges. During my meeting with my mentor on idea 2, I would like to discuss what are the benefits and risks of implementing the guest manual website.



