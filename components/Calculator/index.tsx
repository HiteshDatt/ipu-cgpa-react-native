import Slider from '@react-native-community/slider';
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';

interface CalculationData {
  key: number;
  marks: number | null;
  credits: number | null;
}

const Calculator = () => {
  const [numberOfSubject, setNumberOfSubjects] = useState<number>(5);
  const [calculationData, setCalculationData] = useState<CalculationData[]>([
    {
      key: 0,
      marks: null,
      credits: null,
    },
  ]);
  const [finalCGPA, setFinalCGPA] = useState<string>('');
  const inputElement = useRef<TextInput>(null);

  useEffect(() => {
    const diff: number = numberOfSubject - calculationData.length;
    if (diff > 0) {
      setCalculationData(prevCalculationData => {
        let data: CalculationData[] = [];
        [...Array(diff)].forEach((_item, index) => {
          data.push({
            key:
              prevCalculationData[prevCalculationData.length - 1]?.key +
              index +
              1,
            marks: null,
            credits: null,
          });
        });
        return [...prevCalculationData, ...data];
      });
    } else if (diff < 0) {
      setCalculationData(prevCalculationData => {
        return [...prevCalculationData.slice(0, diff)];
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberOfSubject]);

  useEffect(() => {
    let data: CalculationData[] = [];
    [...Array(numberOfSubject)].map((_item, index) => {
      data.push({
        key: index,
        marks: null,
        credits: null,
      });
    });
    setCalculationData(data);

    if (inputElement.current) {
      inputElement.current.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getGradePointFromMarks = (marks: number): number => {
    switch (true) {
      case marks >= 90:
        return 10;
      case marks >= 75:
        return 9;
      case marks >= 65:
        return 8;
      case marks >= 55:
        return 7;
      case marks >= 50:
        return 6;
      case marks >= 45:
        return 5;
      case marks >= 40:
        return 4;
      default:
        return 0;
    }
  };

  const calculateCGPA = () => {
    let sum = 0,
      totalCredits = 0;
    calculationData.forEach(item => {
      if (item?.credits && item?.marks) {
        sum = sum + item?.credits * getGradePointFromMarks(item?.marks);
        totalCredits = totalCredits + item?.credits;
      } else {
        console.log('error');
      }
    });

    const calculatedCGPA = `${Math.round((sum / totalCredits) * 100) / 100}`;
    setFinalCGPA(calculatedCGPA);
    if (calculatedCGPA === 'NaN') {
      Alert.alert('INVALID', 'Enter correct values!');
    } else {
      Alert.alert('CGPA', `Your CGPA is ${calculatedCGPA}`);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>IPU CGPA Calculator</Text>
      <View style={styles.slideContainer}>
        <Text>Choose number of subjects</Text>
        <Text style={styles.numberOfSub}>{numberOfSubject}</Text>
        <Slider
          style={styles.slider}
          minimumValue={2}
          maximumValue={13}
          step={1}
          value={numberOfSubject}
          onValueChange={value => setNumberOfSubjects(value)}
          thumbTintColor="#0955a0"
          minimumTrackTintColor="#0955a0"
        />
      </View>
      <View style={styles.tableContainer}>
        <View style={styles.row}>
          <Text style={styles.subjectNumberHeading}>Subject</Text>
          <Text style={styles.inputBoxHeading}>Marks</Text>
          <Text style={styles.inputBoxHeading}>Credits</Text>
        </View>
        {[...Array(numberOfSubject)].map((item, index) => {
          return (
            <View key={index} style={styles.row}>
              <Text style={styles.subjectNumber}>{index + 1}</Text>
              <TextInput
                ref={index === 0 ? inputElement : null}
                style={styles.inputBox}
                keyboardType="numeric"
                value={calculationData[index]?.marks?.toString() || ''}
                onChangeText={text => {
                  setCalculationData(prevCalculationData => {
                    if (prevCalculationData[index].marks === Number(text)) {
                      return prevCalculationData;
                    }
                    prevCalculationData[index].marks = Number(text);
                    return [...prevCalculationData];
                  });
                }}
              />
              <TextInput
                style={styles.inputBox}
                keyboardType="numeric"
                value={calculationData[index]?.credits?.toString() || ''}
                onChangeText={text => {
                  setCalculationData(prevCalculationData => {
                    if (prevCalculationData[index].credits === Number(text)) {
                      return prevCalculationData;
                    }
                    prevCalculationData[index].credits = Number(text);
                    return [...prevCalculationData];
                  });
                }}
              />
            </View>
          );
        })}
        <Button title="Submit" onPress={calculateCGPA} />
      </View>
      {finalCGPA !== '' && finalCGPA !== 'NaN' && (
        <View style={styles.finalCGPA}>
          <Text>
            Your CGPA is <Text style={styles.cgpaValue}>{finalCGPA}</Text>!
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // backgroundColor: '#fff',
  },
  heading: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0955a0',
  },
  slideContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  sliderLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  numberOfSub: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0955a0',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  tableContainer: {
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  headerRow: {
    backgroundColor: '#f2f2f2',
    borderTopWidth: 1,
  },
  subjectNumber: {
    width: 90,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: '#f2f2f2',
    padding: 10,
  },
  inputBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    textAlign: 'center',
    fontSize: 16,
  },
  inputBoxHeading: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: '#f2f2f2',
  },
  subjectNumberHeading: {
    width: 90,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#f2f2f2',
  },
  inputBoxContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#0955a0',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  submitButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  finalCGPA: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0955a0',
    marginTop: 20,
  },
  cgpaValue: {
    textAlign: 'center',
    color: '#0955a0',
  },
});

export default Calculator;
