DEPLOYED: https://atheeruwu.github.io/stopwatchjs/
## Timer and Falling Flower Animation with JavaScript

In this project, I created an interactive timer with a fun flower animation that enhances the user experience. Below are the main features and details of the code:

### **1. Timer Functionality:**
The timer has four main features:
- **Start:** Initiates the timer and keeps track of hours, minutes, seconds, and milliseconds. The time is displayed in a `hh : mm : ss : ms` format.
- **Pause:** Stops the timer at the current time.
- **Reset:** Resets the timer back to `00 : 00 : 00 : 000` and clears any ongoing time count.
- **Continuous Update:** Every 10 milliseconds, the timer is updated. When milliseconds reach 1000, it resets to 0, and seconds are incremented. Similarly, seconds reset after reaching 60, minutes reset after reaching 60, and hours increase accordingly.

```javascript
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let int = null;
document.getElementById("start-timer").addEventListener("click", () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});
```
- This approach ensures accurate time tracking while optimizing for performance with `setInterval` and checking for conditions to reset each time unit.
  
### **2. Flower Animation:**
The flower animation adds an element of fun and charm. When the user interacts with the timer, flowers fall from random positions on the screen, providing a visually dynamic effect. The flowers fall sequentially every 100 milliseconds, and a maximum of 7 flowers fall at a time.

#### Features:
- **Flower Creation:** A flower element (`🌸`) is created dynamically using `document.createElement` and placed at random horizontal positions.
- **Falling Animation:** CSS keyframes animation makes the flower fall from the top to the bottom of the screen, giving the effect of a flower shower.
- **Sequential Flower Drops:** The flowers drop one after the other in sequence with a delay, controlled using `setInterval`. The interval is cleared after 7 flowers have fallen.

```javascript
function startFlowerFall() {
    let count = 0;
    flowerInterval = setInterval(() => {
        createFallingFlower();
        count++;
        if (count >= 7) {
            clearInterval(flowerInterval);
        }
    }, 100);
}
```
- **`setInterval` & `animationend`**: The use of `setInterval` to drop flowers and `animationend` to remove them ensures that the DOM stays clean and free from memory leaks.
  
### **3. Code Design and Structure:**
- **Event Listeners:** Event listeners are used to detect clicks on the timer control buttons (`start`, `pause`, and `reset`). This ensures that the timer starts, pauses, or resets based on user input, which is a key principle of interactive web design.
  
- **Responsive and Optimized:** The timer and flowers are both styled to work across different screen sizes, ensuring that the animation and timer look great on any device.

### **How It Works:**
1. **Timer**: On clicking the `Start` button, a timer begins running, updating every 10 milliseconds. When `Pause` is clicked, the interval is cleared. The timer can be reset to its original state using the `Reset` button.
  
2. **Flower Animation**: Simultaneously, when the page loads or any button is clicked, flowers start falling one by one, and after 7 flowers have fallen, the interval is cleared to prevent excessive DOM manipulation.

### **What I Learned:**
- Understanding and using `setInterval` to manage periodic updates.
- Working with JavaScript DOM manipulation to dynamically create and remove elements.
- Using CSS animations to create smooth, eye-catching visual effects.
- The importance of cleaning up resources (removing flower elements when animations finish) to ensure efficient memory usage.

This project demonstrates my ability to handle interactive user interfaces using JavaScript and CSS, giving me the confidence to build engaging, responsive applications. It also showcases my attention to performance and detail, ensuring a pleasant user experience without unnecessary resource consumption.




![stopwatch ](https://github.com/user-attachments/assets/2c9a7f21-99da-4a67-8228-455d46ac0ba6)

![stopwatch2](https://github.com/user-attachments/assets/324bc3eb-fc53-45b8-9d0b-2cc35f11b8bd)






