// Check screen size helper
const isLargeScreen = () => window.innerWidth > 568;
const getTriggerStart = () => isLargeScreen() ? "top 70%" : "top 85%";
const getDelay = (delay) => isLargeScreen() ? delay : 0;

// Initialize GSAP once DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    if (typeof window.gsap === "undefined") {
        document.documentElement.classList.add("gsap-not-found");
        return;
    }
    gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);
    CustomEase.create("main", "0.625, 0.05, 0, 1");
    gsap.defaults({ ease: "main", duration: 0.7 });
});

// Animation helper function
const createSplitText = (el, type) => {
    // For masking to work, we need to specify which element type to wrap
    const maskType = type.includes("lines") ? "lines" : type.includes("words") ? "words" : "chars";
    const split = SplitText.create(el, { type: type, linesClass: "split-line", mask: maskType });

    split.chars?.forEach(c => c.classList.add("split-char"));
    split.words?.forEach(w => w.classList.add("split-word"));
    split.lines?.forEach(l => l.classList.add("split-line"));

    // Apply overflow hidden to mask wrappers
    split.masks?.forEach(m => {
        m.classList.add("split-mask");
        m.style.overflow = "hidden";
        m.style.display = "block";
    });

    return split;
};

// Wait for fonts then initialize animations
document.fonts.ready.then(() => {
    // Hero Main Animation
    document.querySelectorAll('[data-animation-trigger="hero-main"]').forEach(el => {
        el.style.visibility = "visible";
        const delay = getDelay(parseFloat(el.getAttribute("data-animation-delay")) || 0);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: getTriggerStart(),
                once: true
            },
            defaults: {
                ease: main,
                duration: 1,

            }
        });

        const heading = el.querySelector(".u-text > *");
        if (heading) {
            const split = createSplitText(heading, "chars, lines, words");
            tl.from(split.lines, {
                skewY: '6deg',
                opacity: 0,
                yPercent: 100,
                stagger: 0.08
            }, 0 + delay);
        }

        const text = el.querySelector('[data-animate="true"] p');
        if (text) {
            const split = createSplitText(text, "lines");
            tl.from(split.lines, {
                skewY: '2deg',
                opacity: 0,
                yPercent: 100,
                stagger: 0.15
            },
                .3 + delay);
        }

        const btns = el.querySelectorAll(".u-button-wrapper > * > *");
        if (btns.length) tl.from(btns, {
            opacity: 0,
            yPercent: 100,
            stagger: 0.15
        },
            0.3 + delay);

        const visual = el.querySelector(".ratings_wrap");
        if (visual) tl.from(visual, { opacity: 0, yPercent: 100, duration: 0.3, }, 0.4 + delay);
    });

    // Gains Section 
    document.querySelectorAll('[data-animation-trigger="gains-section"]').forEach(el => {
        el.style.visibility = "visible";
        const delay = getDelay(parseFloat(el.getAttribute("data-animation-delay")) || 0);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: getTriggerStart(),
                once: true
            },
            defaults: {
                ease: main,
                duration: 1,

            }
        });

        const heading = el.querySelector(".u-text > *");
        if (heading) {
            const split = createSplitText(heading, "chars, lines, words");
            tl.from(split.lines, {
                skewY: '6deg',
                opacity: 0,
                yPercent: 100,
                stagger: 0.08
            }, 0 + delay);
        }

        const text = el.querySelector('[data-animate="true"] p');
        if (text) {
            const split = createSplitText(text, "lines");
            tl.from(split.lines, {
                skewY: '2deg',
                opacity: 0,
                yPercent: 100,
                stagger: 0.15
            },
                .3 + delay);
        }

        const image = el.querySelectorAll(".u-image-wrapper");
        if (image.length) tl.from(image, {
            opacity: 0,
            yPercent: 10,
            stagger: 0.15
        },
            0.4 + delay);

        const cards = el.querySelectorAll(".card_primary_wrap");
        if (cards.length) tl.from(cards, {
            opacity: 0,
            yPercent: 5,
            stagger: 0.15
        },
            0.4 + delay);
    });

    // CTA Secondary
    document.querySelectorAll('[data-animation-trigger="cta"]').forEach(el => {
        el.style.visibility = "visible";
        const delay = getDelay(parseFloat(el.getAttribute("data-animation-delay")) || 0);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: getTriggerStart(),
                once: true
            },
            defaults: {
                ease: main,
                duration: 1,

            }
        });

        const heading = el.querySelector(".u-text > *");
        if (heading) {
            const split = createSplitText(heading, "chars, lines, words");
            tl.from(split.lines, {
                skewY: '6deg',
                opacity: 0,
                yPercent: 100,
                stagger: 0.08
            }, 0 + delay);
        }

        const text = el.querySelector('[data-animate="true"] p');
        if (text) {
            const split = createSplitText(text, "lines");
            tl.from(split.lines, {
                skewY: '2deg',
                opacity: 0,
                yPercent: 100,
                stagger: 0.15
            },
                .3 + delay);
        }

        const btns = el.querySelectorAll(".u-button-wrapper > * > *");
        if (btns.length) tl.from(btns, {
            opacity: 0,
            yPercent: 100,
            stagger: 0.15
        },
            0.3 + delay);

        const watermark = el.querySelectorAll(".cta_watermark, .badge_wrap");
        if (watermark.length) tl.from(watermark, {
            opacity: 0,
            scale: 0.8,
        },
            0.3 + delay);
    });

    // Cards
    document.querySelectorAll('[data-animation-trigger="cards"]').forEach(el => {
        el.style.visibility = "visible";
        const delay = getDelay(parseFloat(el.getAttribute("data-animation-delay")) || 0);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: getTriggerStart(),
                once: true
            },
            defaults: {
                ease: main,
                duration: 1,

            }
        });

        const heading = el.querySelector(".u-text > *");
        if (heading) {
            const split = createSplitText(heading, "chars, lines, words");
            tl.from(split.lines, {
                skewY: '6deg',
                opacity: 0,
                yPercent: 100,
                stagger: 0.08
            }, 0 + delay);
        }

        const text = el.querySelector('[data-animate="true"] p');
        if (text) {
            const split = createSplitText(text, "lines");
            tl.from(split.lines, {
                skewY: '2deg',
                opacity: 0,
                yPercent: 100,
                stagger: 0.15
            },
                .3 + delay);
        }

        const btns = el.querySelectorAll(".u-button-wrapper > * > *");
        if (btns.length) tl.from(btns, {
            opacity: 0,
            yPercent: 100,
            stagger: 0.15
        },
            0.3 + delay);


        const cards = el.querySelectorAll(".u-grid > * > *");
        if (cards.length) tl.from(cards, {
            opacity: 0,
            yPercent: 5,
            stagger: 0.15
        },
            0.4 + delay);

    });

    // Process
    document.querySelectorAll('[data-animation-trigger="process"]').forEach(el => {
        el.style.visibility = "visible";
        const delay = getDelay(parseFloat(el.getAttribute("data-animation-delay")) || 0);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: getTriggerStart(),
                once: true
            },
            defaults: {
                ease: main,
                duration: 1,

            }
        });

        const heading = el.querySelector(".u-text > *");
        if (heading) {
            const split = createSplitText(heading, "chars, lines, words");
            tl.from(split.lines, {
                skewY: '6deg',
                opacity: 0,
                yPercent: 100,
                stagger: 0.08
            }, 0 + delay);
        }

        const text = el.querySelector('[data-animate="true"] p');
        if (text) {
            const split = createSplitText(text, "lines");
            tl.from(split.lines, {
                skewY: '2deg',
                opacity: 0,
                yPercent: 100,
                stagger: 0.15
            },
                .3 + delay);
        }

        const btns = el.querySelectorAll(".u-button-wrapper > * > *");
        if (btns.length) tl.from(btns, {
            opacity: 0,
            yPercent: 100,
            stagger: 0.15
        },
            0.3 + delay);


        const cards = el.querySelectorAll(".process_layout > *");
        const gradients = el.querySelectorAll(".process_blur");

        if (cards.length) {
            tl.from(
                cards,
                {
                    opacity: 0,
                    yPercent: 5,
                    stagger: 0.15,
                    onComplete: () => {
                        // Remove inline styles from all cards
                        cards.forEach(card => {
                            card.removeAttribute("style");
                        });

                        // Set opacity of all process_gradient elements to 1
                        gradients.forEach(g => {
                            g.style.opacity = "1";
                        });
                    }
                },
                0.4 + delay
            );
        }


    });

    // Testimonials
    document.querySelectorAll('[data-animation-trigger="testimonials"]').forEach(el => {
        el.style.visibility = "visible";
        const delay = getDelay(parseFloat(el.getAttribute("data-animation-delay")) || 0);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: getTriggerStart(),
                once: true
            },
            defaults: {
                ease: main,
                duration: 1,

            }
        });

        const heading = el.querySelector(".u-text > *");
        if (heading) {
            const split = createSplitText(heading, "chars, lines, words");
            tl.from(split.lines, {
                skewY: '6deg',
                opacity: 0,
                yPercent: 100,
                stagger: 0.08
            }, 0 + delay);
        }

        const text = el.querySelector('[data-animate="true"] p');
        if (text) {
            const split = createSplitText(text, "lines");
            tl.from(split.lines, {
                skewY: '2deg',
                opacity: 0,
                yPercent: 100,
                stagger: 0.15
            },
                .3 + delay);
        }

        const btns = el.querySelectorAll(".u-button-wrapper > * > *, .slider_button_layout > *");
        if (btns.length) tl.from(btns, {
            opacity: 0,
            yPercent: 100,
            stagger: 0.15
        },
            0.3 + delay);


        const cards = el.querySelectorAll(".card_testimonials_wrap");

        if (cards.length) {
            tl.from(
                cards,
                {
                    opacity: 0,
                    yPercent: 5,
                    stagger: 0.15,
                },
                0.4 + delay
            );
        }


    });

    // FAQs
     document.querySelectorAll('[data-animation-trigger="faq"]').forEach(el => {
        el.style.visibility = "visible";
        const delay = getDelay(parseFloat(el.getAttribute("data-animation-delay")) || 0);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: getTriggerStart(),
                once: true
            },
            defaults: {
                ease: main,
                duration: 1,

            }
        });

        const heading = el.querySelector(".u-text > *");
        if (heading) {
            const split = createSplitText(heading, "chars, lines, words");
            tl.from(split.lines, {
                skewY: '6deg',
                opacity: 0,
                yPercent: 100,
                stagger: 0.08
            }, 0 + delay);
        }

        const text = el.querySelector('[data-animate="true"] p');
        if (text) {
            const split = createSplitText(text, "lines");
            tl.from(split.lines, {
                skewY: '2deg',
                opacity: 0,
                yPercent: 100,
                stagger: 0.15
            },
                .3 + delay);
        }


        const cards = el.querySelectorAll(".accordion_item");

        if (cards.length) {
            tl.from(
                cards,
                {
                    opacity: 0,
                    yPercent: 5,
                    stagger: 0.15,
                },
                0.4 + delay
            );
        }


    });

     // Events
    document.querySelectorAll('[data-animation-trigger="events"]').forEach(el => {
        el.style.visibility = "visible";
        const delay = getDelay(parseFloat(el.getAttribute("data-animation-delay")) || 0);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: getTriggerStart(),
                once: true
            },
            defaults: {
                ease: main,
                duration: 1,

            }
        });

        const heading = el.querySelector(".u-text > *");
        if (heading) {
            const split = createSplitText(heading, "chars, lines, words");
            tl.from(split.lines, {
                skewY: '6deg',
                opacity: 0,
                yPercent: 100,
                stagger: 0.08
            }, 0 + delay);
        }

        const text = el.querySelector('[data-animate="true"] p');
        if (text) {
            const split = createSplitText(text, "lines");
            tl.from(split.lines, {
                skewY: '2deg',
                opacity: 0,
                yPercent: 100,
                stagger: 0.15
            },
                .3 + delay);
        }

        const btns = el.querySelectorAll(".u-button-wrapper > * > *");
        if (btns.length) tl.from(btns, {
            opacity: 0,
            yPercent: 100,
            stagger: 0.15
        },
            0.3 + delay);


        const cards = el.querySelectorAll(".events_img");
        if (cards.length) tl.from(cards, {
            opacity: 0,
            yPercent: 5,
            stagger: 0.15
        },
            0.4 + delay);

    });

});

gsap.fromTo(".process_blur",
    {
        "--_process-animation---background-position": "0vw"
    },
    {
        "--_process-animation---background-position": "100vw",
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "none"
    }
);