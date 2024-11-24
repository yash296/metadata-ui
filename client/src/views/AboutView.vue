<template>
  <div class="flex flex-col items-center justify-center min-h-screen space-y-8 p-4">
    <!-- heading component -->
    <div class="text-center">
      <Heading text="Support Data Flow" class="text-2xl font-semibold text-gray-800" />
    </div>
    <!-- image component -->
    <div class="w-full max-w-xs">
      <ImageComponent src="https://storage.googleapis.com/paw-search/03e29fc6-53ec-4d77-8534-c512a8b4b6a4.jpg"
        styleName="width: 300px; height: 200px" class="rounded-lg shadow-lg" />
    </div>
    <!-- button component -->
    <div class="w-full max-w-xs">
      <ButtonComponent label="Click Me!!" @onButtonClick="handleClick" :className="baseVariants['buttonPrimary']"
        :clickAsEmit="true" class="w-full text-center" />
    </div>
  </div>

</template>

<script>
import { baseVariants } from '@/assets/baseVariants';
import ButtonComponent from '@/components/core/ButtonComponent.vue';
import Heading from '@/components/core/Heading.vue';
import ImageComponent from '@/components/core/ImageComponent.vue';
export default {
  components: {
    ButtonComponent, ImageComponent, Heading
  },
  setup() {
    const handleClick = () => {
      alert('click event received on about page')
    }
    return {
      handleClick,
      baseVariants
    }
  }
}
</script>

<style></style>
