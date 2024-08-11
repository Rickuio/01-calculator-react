import { useEffect, useRef, useState } from "react"

enum Operator {
    add = '+',
    subtract = '-',
    multiply = 'x',
    divide = '/',
}

export const useCalculator = () => {

    const [formula, setformula] = useState('')
    const [number, setNumber] = useState('0')
    const [prevNumber, setPrevNumber] = useState('0')
    const lastOperation = useRef<Operator>();

    useEffect(() => {
      if (lastOperation.current) {
        const firstFormula = formula.split(' ').at(0);
        setformula(`${ firstFormula } ${ lastOperation.current } ${ number }`)
      }else {
        setformula(number);
      }

    }, [number])
    
    useEffect( () => {
        const subResult = calculateSubTotal();
        setPrevNumber( `${ subResult }` );
    }, [formula])

    //Encerar
    const clean = () => {
        if (number !== '0') return setNumber('0');
        if (prevNumber !== '0') return setPrevNumber('0');
    }

    const cleanAll = () => {
        setNumber('0');
        setPrevNumber('0');
        setformula('');
        lastOperation.current = undefined;
    }

    //Borrar el ultimo
    const deleteOperation = (numberStr: string) => {
        let currentNumber = '';
        let temporalNumber = number;

        if (number.includes('-')) {
            currentNumber = '-';
            temporalNumber = number.substring(1);
        }

        if (temporalNumber.length > 1) {
            return setNumber(currentNumber + temporalNumber.slice(0,-1));

        }

        setNumber('0');
    }

    const toggleSign = () => {
        if ( number.includes('-') ) {
            return setNumber( number.replace('-',''));
        }
        setNumber('-' + number);
    }

    const buildNumber = (numberStr: string) => {
        
        if (number.includes('.') && numberStr === '.') return;

        if (number.startsWith('0') || number.startsWith('-0') ) {
            
            //Solo un punto decimal
            if (numberStr === '.') return setNumber(number + numberStr);

            //Si es otro cero y no hay punto
            if (numberStr === '0' && number.includes('.')) return setNumber(number + numberStr);

            //Evitar varios ceros consecutivos
            if (numberStr === '0' && !number.includes('.')) return;

            //Todo bien empiezo con el 0 y pongo cualquier numero
            if ( numberStr !== '0' && !number.includes('.') ) return setNumber(numberStr);

            return setNumber(number + numberStr);
            
        }

        setNumber(number + numberStr);

    }

    const setLastNumber = () => {
        calculateResult();
        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0,-1));
        }else {
            setPrevNumber(number)
        }
        setNumber('0')
    }

    const sumar = () => {
        setLastNumber();
        lastOperation.current = Operator.add;
    }

    const restar = () => {
        setLastNumber();
        lastOperation.current = Operator.subtract;
    }

    const multiplicar = () => {
        setLastNumber();
        lastOperation.current = Operator.multiply;
    }

    const dividir = () => {
        setLastNumber();
        lastOperation.current = Operator.divide;
    }

    const calculateResult = () => {
        const result = calculateSubTotal();
        setformula(`${ result }`);
        setPrevNumber('0')
        lastOperation.current = undefined;
    }

    const calculateSubTotal = ():number => {
        /*
        const num1 = Number(number);
        const num2 = Number(prevNumber);
        switch(lastOperation.current) {
            case Operator.add:
                setNumber( `${num1 + num2}`);
                break;
            case Operator.subtract:
                setNumber( `${num2 - num1}`);
                break;
            case Operator.multiply:
                setNumber( `${num1 * num2}`);
                break;
            case Operator.divide:
                setNumber( `${num2 / num1}`);
                break;
            default:
                throw new Error('Operation not permited');
        }
        */
        
        const [ value1, operation, value2] = formula.split(' ');
        const num1 = Number(value1);
        const num2 = Number(value2);
        let result = 0;

        if (isNaN(num2)) return num1;
        
        switch(operation) {
            case Operator.add:
                result =  num1 + num2;
                break;
            case Operator.subtract:
                result =  num1 - num2;
                break;
            case Operator.multiply:
                result =  num1 * num2;
                break;
            case Operator.divide:
                result =  num1 / num2;
                console.log('Decimales: ' + result.valueOf())
                break;
            default:
                throw new Error('Operation not permited');
        }
        return result;
    }


    return {
        //Properties
        number,
        prevNumber,
        formula,

        //Methods
        buildNumber,
        toggleSign,
        clean,
        cleanAll,
        deleteOperation,
        sumar,
        restar,
        multiplicar,
        dividir,
        calculateResult,
    }
}
