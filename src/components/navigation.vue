<script>
export default {
  data() {
    return {
      menu: [
        { name: 'blog' },
        { name: 'projects' }
      ],
    };
  },
  methods: {
    getDropdown() {
      return document.querySelector('.dropdown');
    },
    toggleMenu() {
      this.getDropdown().classList.toggle('-rotate-180');
      window.addEventListener('click', this.closeMenu);
      window.addEventListener('touchstart', this.closeMenu);
    },
    closeMenu(e) {
      if (!this.$el.contains(e.target)) {
        this.getDropdown().classList.add('-rotate-180');
        window.removeEventListener('click', this.closeMenu);
        window.removeEventListener('touchstart', this.closeMenu);
      }
    },
    beforeDestroy() {
      window.removeEventListener('click', this.closeMenu);
      window.removeEventListener('touchstart', this.closeMenu);
    },
  },
};
</script>

<style is:global>
.btn-shadow {
  filter: drop-shadow(0 0 2px gray);
}
#nav ul a {
	display: block;
	position: relative;
	padding: 0.2em 0;
}

#nav ul a::after, #nav .logo::after {
	content: '';
	position: absolute;
	bottom: -3px;
	left: 0;
	width: 100%;
	height: 8px;
	background-color: #e91e63;
	opacity: 0;
	transition: opacity 300ms, transform 300ms;
}

#nav ul li a, #nav .logo {
	overflow: hidden;
}

#nav ul li a::after, #nav .logo::after {
	opacity: 1;
	transform: translate3d(-100%, 0, 0);
}

#nav ul li a:hover::after,
#nav ul li a:focus::after, #nav .logo:focus::after, #nav .logo:hover::after {
	transform: translate3d(0, 0, 0);
}

.dashed-animation:hover::before  {
    position: absolute;
    content: '';
    height: calc(100% + 18px); 
    width: calc(100% + 18px); 
    border: 4px dashed #e91e63;
    border-radius: inherit;
    animation: spin 10s linear infinite;
  }  @keyframes spin { 
    100% { 
      transform: rotateZ(360deg); 
    }
}
</style>

<template>
  <div id="nav" class="transparent fixed top-0 w-full z-20">
    <div class="navbar max-w-screen-md mx-auto lg:px-0 pt-0">
      <div class="navbar-start text-gray-100">
        <div class="will-change-transform transform-gpu -rotate-180 dropdown duration-500 transition-transform">
          <div tabindex="0" role="button" aria-label="Toggle menu"
               class="dashed-animation hover:text-[#e91e63] btn btn-ghost btn-circle bg-gray-900 hover:bg-gray-900 btn-shadow"
               @click="toggleMenu" @touchstart="toggleMenu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul tabindex="0" aria-label="Navigation"
               class="shadow-xl border-l-4 border-[#e91e63] min-w-80 absolute capitalize text-gray-200 bg-gray-900 rounded-lg z-[1] mt-3 py-4 px-6">         
            <component v-for="entry in menu">
              <li><a class="w-fit relative block text-3xl hover:text-[#e91e63] py-2 transition duration-300" v-bind:href="'/' + entry.name">{{ entry.name }}</a></li>
            </component>       
          </ul>
        </div>
      </div>
      <div class="navbar-center">
      </div>
      <div class="navbar-end">
        <a class="w-fit text-3xl block relative" href="/">
              <span class="logo block btn-shadow bg-gray-900 p-4 rounded-b-xl transition duration-300">
                <img class="w-16" src="/favicon.svg">
              </span>
            </a>
      </div>
    </div>
  </div>
</template>