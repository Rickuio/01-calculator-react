
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { styles, colors as paint } from '../../config/theme/app-theme'
import { CalculatorButton } from '../components/CalculatorButton'

export const CalculatorScreen = () => {
  return (
    <View style={ styles.calculatorContainer }>
      
      <View style={ styles.calculatorPadd }>
        <Text style={ styles.mainResult }>1500</Text>
        <Text style={ styles.subResult }>15</Text>
      </View>

      <View style={ styles.row }>
        <CalculatorButton label='C' color={ paint.lightGray } blackText />
        <CalculatorButton label='+/-' color={ paint.lightGray} blackText />
        <CalculatorButton label='%' color={ paint.lightGray} blackText />
        <CalculatorButton label='/' color={ paint.orange } />
      </View>

      <View style={ styles.row }>
        <CalculatorButton label='7' />
        <CalculatorButton label='8' />
        <CalculatorButton label='9'/>
        <CalculatorButton label='x' color={ paint.orange } />
      </View>

      <View style={ styles.row }>
        <CalculatorButton label='4' />
        <CalculatorButton label='5' />
        <CalculatorButton label='6'/>
        <CalculatorButton label='-' color={ paint.orange } />
      </View>

      <View style={ styles.row }>
        <CalculatorButton label='1' />
        <CalculatorButton label='2' />
        <CalculatorButton label='3'/>
        <CalculatorButton label='+' color={ paint.orange } />
      </View>

      <View style={ styles.row }>
        <CalculatorButton label='del' color={ paint.lightGray } />
        <CalculatorButton label='0' />
        <CalculatorButton label='.'/>
        <CalculatorButton label='=' color={ paint.darkGreen } />
      </View>

    </View>
  )
}
