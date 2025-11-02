import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useCartStore } from '@/store/cart.store'
import CustomHeader from '@/components/CustomHeader'
import cn from "clsx"
import { PaymentInfoStripeProps } from '@/type'
import CustomButton from '@/components/CustomButton'
import CartItem from '@/components/CartItem'

const PaymentInfoStripe = ({ label,  value,  labelStyle,  valueStyle, }: PaymentInfoStripeProps) => (
  <View className="flex-between flex-row my-1">
      <Text className={cn("paragraph-medium text-gray-200", labelStyle)}>
          {label}
      </Text>
      <Text className={cn("paragraph-bold text-dark-100", valueStyle)}>
          {value}
      </Text>
  </View>
)
const Cart = () => {
  const { items, getTotalItems, getTotalPrice } = useCartStore()

  const totalItems = getTotalItems()
  const totalPrice = getTotalPrice()
  return (
    <SafeAreaView className='bg-white h-full'>
      <FlatList 
        data ={items}
        renderItem = {({item}) => <CartItem item={item}/>}
        keyExtractor={(item) => item.id}
        contentContainerClassName='pb-28 px-5 pt-5'
        ListHeaderComponent={() => <CustomHeader title="Your cart"/>}
        ListEmptyComponent={() => <Text> Cart is Empty </Text>}
        ListFooterComponent={() => totalItems > 0 && (
          <View className='gap-5'>
            <View className='mt-6 border border-gray-200 p-5 rounded-2xl'>
              <Text className='h-6 bold text-dark-100 mb-5'>
                Payment Summary
              </Text>

              <PaymentInfoStripe label={`Total Items (${totalItems})`} value={`$${totalPrice.toFixed(2)}`}/>
              <PaymentInfoStripe label={`Delivery Fee`} value={`$${totalPrice.toFixed(2)}`}/>
              <PaymentInfoStripe label={`Discount`} value={`$${totalPrice.toFixed(2)}`} valueStyle='!text-success'/>
              <View className='border-t border-gray-300 my-2'></View>
              <PaymentInfoStripe label={`Total`} value={`$${totalPrice.toFixed(2) + 5 + 2}`} 
              valueStyle='base-bold !text-dark-100 !text-right'
              labelStyle='base-bold !text-dark-100'
              />
            </View>
            <CustomButton title='Order Now!'/>
          </View>
        )}
      >

      </FlatList>
    </SafeAreaView>
  )
}

export default Cart