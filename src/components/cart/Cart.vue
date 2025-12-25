<template>
  <div class="fixed inset-0 z-50 overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <!-- Background overlay -->
      <div 
        class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        @click="$emit('close')"
      ></div>

      <!-- Cart panel -->
      <div class="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div class="w-screen max-w-md">
          <div class="flex h-full flex-col bg-white shadow-xl">
            <!-- Header -->
            <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
              <div class="flex items-start justify-between">
                <h2 class="text-lg font-medium text-gray-900">Shopping cart</h2>
                <button
                  type="button"
                  class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md p-2 text-gray-400 hover:text-gray-500"
                  @click="$emit('close')"
                >
                  <span class="sr-only">Close panel</span>
                  <i class="fas fa-times"></i>
                </button>
              </div>

              <div class="mt-8">
                <div v-if="cartItems.length === 0" class="text-center py-12">
                  <i class="fas fa-shopping-cart text-4xl text-gray-300 mb-4"></i>
                  <h3 class="text-lg font-medium text-gray-900">Your cart is empty</h3>
                  <p class="mt-1 text-gray-500">Start adding some items to your cart</p>
                  <button
                    @click="$emit('close')"
                    class="mt-6 rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Continue Shopping
                  </button>
                </div>

                <div v-else class="flow-root">
                  <ul role="list" class="-my-6 divide-y divide-gray-200">
                    <li v-for="item in cartItems" :key="item.id" class="flex py-6">
                      <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          :src="item.image"
                          :alt="item.name"
                          class="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div class="ml-4 flex flex-1 flex-col">
                        <div>
                          <div class="flex justify-between text-base font-medium text-gray-900">
                            <h3>{{ item.name }}</h3>
                            <p class="ml-4">ETB {{ formatPrice(item.price * item.quantity) }}</p>
                          </div>
                          <p class="mt-1 text-sm text-gray-500">{{ item.category }}</p>
                        </div>
                        <div class="flex flex-1 items-end justify-between text-sm">
                          <div class="flex items-center border rounded-md">
                            <button 
                              @click="updateQuantity(item, -1)"
                              class="px-3 py-1 hover:bg-gray-100"
                              :disabled="item.quantity <= 1"
                            >
                              -
                            </button>
                            <span class="px-3 py-1">{{ item.quantity }}</span>
                            <button 
                              @click="updateQuantity(item, 1)"
                              class="px-3 py-1 hover:bg-gray-100"
                            >
                              +
                            </button>
                          </div>

                          <button
                            type="button"
                            class="font-medium text-red-600 hover:text-red-500"
                            @click="removeFromCart(item)"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Cart footer -->
            <div v-if="cartItems.length > 0" class="border-t border-gray-200 py-6 px-4 sm:px-6">
              <div class="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>ETB {{ formatPrice(subtotal) }}</p>
              </div>
              <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
              <div class="mt-6">
                <button
                  @click="checkout"
                  class="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                >
                  Checkout
                </button>
              </div>
              <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or
                  <button
                    type="button"
                    class="ml-1 font-medium text-blue-600 hover:text-blue-500"
                    @click="$emit('close')"
                  >
                    Continue Shopping<span aria-hidden="true"> &rarr;</span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  cartItems: {
    type: Array,
    required: true,
    default: () => []
  }
});

const emit = defineEmits(['update:cartItems', 'checkout', 'close']);

const subtotal = computed(() => {
  return props.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
});

const formatPrice = (price) => {
  return (Number(price) || 0).toFixed(2);
};

const updateQuantity = (item, change) => {
  const newQuantity = item.quantity + change;
  if (newQuantity < 1) return;
  
  const updatedItems = props.cartItems.map(cartItem => {
    if (cartItem.id === item.id) {
      return { ...cartItem, quantity: newQuantity };
    }
    return cartItem;
  });
  
  emit('update:cartItems', updatedItems);
};

const removeFromCart = (item) => {
  const updatedItems = props.cartItems.filter(cartItem => cartItem.id !== item.id);
  emit('update:cartItems', updatedItems);
};

const checkout = () => {
  emit('checkout');
};
</script>
