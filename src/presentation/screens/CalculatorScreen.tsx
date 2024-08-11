
import React from 'react'
import { Text, TurboModuleRegistry, View } from 'react-native'
import { styles, colors as paint } from '../../config/theme/app-theme'
import { CalculatorButton } from '../components/CalculatorButton'
import { useCalculator } from '../hooks/useCalculator'

export const CalculatorScreen = () => {

  const { 
    number, prevNumber, formula, buildNumber, toggleSign, 
    cleanAll, deleteOperation, sumar, restar, multiplicar, dividir, calculateResult,
   } = useCalculator();

  return (
    <View style={ styles.calculatorContainer }>
      
      <View style={ styles.calculatorPadd }>

        <Text 
          adjustsFontSizeToFit
          numberOfLines={1}
          style={ styles.mainResult }> { formula }
        </Text>
        {
          ( formula === prevNumber)
          ? <Text style={ styles.subResult }></Text>
          : (
            <Text
              adjustsFontSizeToFit
              numberOfLines={1} 
              style={ styles.subResult }> 
              { (prevNumber === '0') ? '' : prevNumber }
            </Text>
          )
        }
        

      </View>

      <View style={ styles.row }>
        <CalculatorButton onPress={ ()=> cleanAll() } label='C' color={ paint.lightGray } blackText />
        <CalculatorButton onPress={ ()=> toggleSign() } label='+/-' color={ paint.lightGray} blackText />
        <CalculatorButton onPress={ ()=> console.log('%') } label='%' color={ paint.lightGray} blackText />
        <CalculatorButton onPress={ dividir } label='/' color={ paint.orange } />
      </View>

      <View style={ styles.row }>
        <CalculatorButton onPress={ ()=> buildNumber('7') } label='7' subLabel='PQRS' />
        <CalculatorButton onPress={ ()=> buildNumber('8') } label='8' subLabel='TUV' />
        <CalculatorButton onPress={ ()=> buildNumber('9') } label='9' subLabel='WXYZ' />
        <CalculatorButton onPress={ multiplicar } label='x' color={ paint.orange } />
      </View>

      <View style={ styles.row }>
        <CalculatorButton onPress={ ()=> buildNumber('4') } label='4' subLabel='GHI' />
        <CalculatorButton onPress={ ()=> buildNumber('5') } label='5' subLabel='JKL' />
        <CalculatorButton onPress={ ()=> buildNumber('6') } label='6' subLabel='MNO' />
        <CalculatorButton onPress={ restar } label='-' color={ paint.orange } />
      </View>

      <View style={ styles.row }>
        <CalculatorButton onPress={ ()=> buildNumber('1') } label='1' subLabel='⧝_⧝' />
        <CalculatorButton onPress={ ()=> buildNumber('2') } label='2' subLabel='ABC' />
        <CalculatorButton onPress={ ()=> buildNumber('3') } label='3' subLabel='DEF' />
        <CalculatorButton onPress={ sumar } label='+' color={ paint.orange } />
      </View>

      <View style={ styles.row }>
        <CalculatorButton onPress={ ()=> deleteOperation('borra') } label='del' color={ paint.lightGray } />
        <CalculatorButton onPress={ ()=> buildNumber('0') } label='0' />
        <CalculatorButton onPress={ ()=> buildNumber('.') } label='.'/>
        <CalculatorButton onPress={ calculateResult } label='=' color={ paint.darkGreen } />
      </View>

    </View>
  )
}
