import React from 'react';
import {View, Text, Image, StyleSheet, Linking} from 'react-native';

const Description = () => {
  return (
    <View style={styles.description}>
      <Text style={styles.heading1}>
        How to calculate CGPA for IPUniversity?
      </Text>
      <Text style={styles.paragraph}>
        The formula for calculation of CGPA is given below:
      </Text>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/CGPAalgo.png')}
          style={styles.image}
        />
      </View>
      <Text style={styles.paragraph}>
        Where {'\n'}
        Cni - number of credits of the ith course of the nth semester. {'\n'}
        Gni - grade points of the ith course of the nth semester
      </Text>
      <View>
        <Text style={styles.heading2}>In easier words :</Text>
        <Text style={styles.listItem}>
          1. It calculates the product of 'credits and grade point' for each
          subject and add them
        </Text>
        <Text style={styles.listItem}>
          2. then divides the result obtained above by the total number of
          credits
        </Text>
        <Text style={styles.listItem}>
          3. and lastly the final result is rounded off to 2 decimal places
        </Text>
      </View>
      <View>
        <Text style={styles.heading2}>Grading System :</Text>
        <Text style={styles.paragraph}>
          The marks that a student secures from the maximum 100 are to be
          converted into a grade as a letter.
        </Text>
        <Text style={styles.paragraph}>
          The grade points are the numerical equivalent of the letter grade
          assigned to a student based on the total marks obtained by the
          student. These grade points and letter grades are based on the points
          scale as given below:
        </Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Marks</Text>
            <Text style={styles.tableCell}>Grade</Text>
            <Text style={styles.tableCell}>Grade Point</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>90-100</Text>
            <Text style={styles.tableCell}>O</Text>
            <Text style={styles.tableCell}>10</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>75-89</Text>
            <Text style={styles.tableCell}>A+</Text>
            <Text style={styles.tableCell}>9</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>65-74</Text>
            <Text style={styles.tableCell}>A</Text>
            <Text style={styles.tableCell}>8</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>55-64</Text>
            <Text style={styles.tableCell}>B+</Text>
            <Text style={styles.tableCell}>7</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>50-54</Text>
            <Text style={styles.tableCell}>B</Text>
            <Text style={styles.tableCell}>6</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>45-49</Text>
            <Text style={styles.tableCell}>C</Text>
            <Text style={styles.tableCell}>5</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>40-44</Text>
            <Text style={styles.tableCell}>P</Text>
            <Text style={styles.tableCell}>4</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>
              Less than 40 {'\n'}
              or absent
            </Text>
            <Text style={styles.tableCell}>F</Text>
            <Text style={styles.tableCell}>0</Text>
          </View>
        </View>
        <Text style={styles.paragraph}>
          Grade P, that is the grade point 4 is the course passing grade unless
          specified otherwise by the Syllabi and Scheme of Teaching and
          Examination for the respective programme.
        </Text>
        <Text style={styles.paragraph}>
          For grades below the passing grade (P) as defined in the Syllabi and
          Scheme of Teaching and Examination, the associated grade points are to
          be taken equal to zero.
        </Text>
        <Text style={styles.paragraph}>
          Both the acquired marks and grades are to be reflected on the term end
          marksheets.
        </Text>
      </View>
      <View>
        <Text style={styles.heading2}>CGPA Divisions :</Text>
        <Text style={styles.paragraph}>
          The successful candidates having an overall CGPA higher than or equal
          to the minimum CGPA that is specified in the Syllabi and Scheme of
          Teaching and Examination for the award of the degree, are to be
          awarded the degree and be placed in Divisions as below:
        </Text>
        <Text style={styles.listItem}>
          <Text>CGPA of 4.00 – 4.99</Text> are to be placed in the Third
          Division.
        </Text>
        <Text style={styles.listItem}>
          <Text>CGPA of 5.00 – 6.49</Text> are to be placed in the Second
          Division.
        </Text>
        <Text style={styles.listItem}>
          <Text>CGPA of 6.50 or above</Text> are to be placed in the First
          Division.
        </Text>
        <Text style={styles.listItem}>
          <Text>CGPA of 10</Text> are to be placed in the Exemplary Performance.
          Exemplary Performance shall be awarded, if and only if, every course
          of the programme offered to the student is passed in the first chance
          of appearing in the paper that is offered to the student. A student
          with an academic break shall not be awarded the exemplary performance.
        </Text>
        <Text style={styles.listItem}>
          The CGPA x 10 shall be deemed equivalent to percentage of marks
          obtained by the student for the purpose of equivalence to percentage
          of marks.
        </Text>
      </View>
      <Text style={styles.note}>
        Note:{'\n'}
        This IPU CGPA Calculator works on the algorithm provided by IPUniversity
        in the ordinance 11.{'\n'}
        <Text
          style={styles.link}
          onPress={() =>
            Linking.openURL('http://ipu.ac.in/norms/Ordinance/oridancemain.htm')
          }>
          ~University School of Education,GGSIPU (University Ordinance)
        </Text>
        <Text
          style={styles.link}
          onPress={() =>
            Linking.openURL(
              'http://ipu.ac.in/norms/Ordinance/ordinanc11020815.pdf',
            )
          }>
          ~Ordinance 11
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    maxWidth: 800,
    margin: 'auto',
    padding: 14,
  },
  heading1: {
    color: '#000000', // Replace with your primary heading color
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  heading2: {
    color: '#000000', // Replace with your primary heading color
    marginTop: 22,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  paragraph: {
    lineHeight: 20,
  },
  listItem: {
    marginLeft: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 210,
    height: 70,
  },
  table: {
    borderWidth: 4,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 1,
    shadowColor: '#000000', // Replace with your primary color
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 13,
    textAlign: 'center',
    marginVertical: 8,
    alignSelf: 'center',
    width: '98%',
    marginTop: 20,
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 2.5,
    borderBottomColor: 'black',
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    paddingVertical: 5,
  },
  note: {
    fontSize: 12,
    fontStyle: 'italic',
    marginTop: 20,
  },
  link: {
    color: '#0101cc',
  },
});

export default Description;
