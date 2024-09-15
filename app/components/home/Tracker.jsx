import React from 'react'

const Tracker = () => {
  return (
    <div>
        <section class="tracking">
            <div class="container">
                <div class="tracking__inner">
                    <div class="tracking-shape-1 float-bob-y">
                        <img src="/img/tracking-shape-1.png" alt=""/>
                    </div>
                    <div class="tracking-shape-2 float-bob-x">
                        <img src="/img/tracking-shape-2.png" alt=""/>
                    </div>
                    <div class="tracking-shape-3 float-bob-x">
                        <img src="/img/tracking-shape-3.png" alt=""/>
                    </div>
                    <div class="tracking-shape-4 float-bob-y">
                        <img src="/img/tracking-shape-4.png" alt=""/>
                    </div>
                    <div class="tracking__left">
                        <div class="tracking__icon">
                            <span class="icon-folder"></span>
                        </div>
                        <div class="tracking__content">
                            <p class="tracking__sub-title">Quisque vel ortor</p>
                            <h3 class="tracking__title">Start tracking your claims</h3>
                        </div>
                    </div>
                    <div class="tracking__btn-box">
                        <a href="about.html" class="thm-btn tracking__btn">Track Your Claim</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Tracker