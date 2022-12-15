import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ToastAndroid,
  ScrollView,
} from 'react-native';

const U_Policy = ({navigation, route}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}></View>
      <ScrollView style={{margin:10}}>
        <Text style={styles.txtpolicy}>
          3344-90-01 University space. (A) Purpose The purpose of this policy is
          to establish rules for the use, assignment, and reassignment of all
          university space including buildings, grounds, and facilities. (B)
          Authority (1) All university space at Cleveland state university is
          the property of the state of Ohio and is subject to all applicable
          state laws, regulations and rules. Ultimate authority for the
          allocation and use of university space rests with the president, who
          may review any actual or proposed allocation. The office of the
          provost routinely delegates allocation and control of all university
          space. The provost shall appoint a university space advisory committee
          to provide advice on issues related to academic space assignments. All
          campus buildings, facilities, and space, including those currently
          allocated to non-academic units, support the university’s academic
          mission and are subject to this policy. (2) All requests for new space
          or reassignment of existing academic space shall be reviewed by the
          office of the provost. The university space advisory committee shall
          periodically review space allocation and/or reassignment decisions
          made throughout the year. The committee may propose new procedures and
          guidelines to manage the assignment of space as needed in order to
          ensure efficient and equitable use of the university’s facilities and
          space resources. (C) University space advisory committee (1) The
          university space advisory committee shall consist of 3344-90-01 2
          representatives from academic sectors of the university including: (a)
          Provost (b) Vice provost, academic planning, committee chair (c)
          Executive director, campus support services (d) Senior vice president,
          research and innovation (e) Two academic deans (f) Vice president,
          student affairs and dean of students (g) Three faculty members
          (nominated by faculty senate) (h) Chair, faculty senate committee on
          academic space (i) One representative, registrar’s office (j) One
          representative, division of university advancement (k) One student
          representative (nominated by SGA) (l) One representative, university
          research council (URC) (m) One representative, university architect
          (ex officio) (2) Members shall serve the following terms: All
          administrative appointees shall be permanent members; deans and/or
          chairs, faculty, and staff appointees shall serve two-year terms,
          while students shall serve a one-year term. The provost may make
          temporary appointments and/or appoint additional representatives as
          deemed appropriate. (3) The university space advisory committee shall
          give careful consideration to institutional priorities, needs, and
          other relevant factors and make policy and/or procedural
          recommendations to the provost. The committee’s recommendations shall
          be advisory, with the understanding that the provost has ultimate
          authority on whether to accept and/or act on any recommendations. (4)
          The university space advisory committee’s responsibilities include:
          3344-90-01 3 (a) Analyzing current and future space requirements for
          all programs and units requesting space (re)allocation. (b) Providing
          the provost and president with recommendations for procurement,
          programmatic space assignment, and space repurposing. (c) Serving as
          record keeper for all space assignments. (d) Developing and
          disseminating appropriate processes and procedures for making requests
          for space use and reassignment. Space priorities and principles (a)
          Acknowledge that space is a limited resource that should be considered
          an integral component in program or unit planning similar to resource
          issues of budget, personnel, and equipment; (b) Recognize the special
          space and facility support needs of each unit; (c) Promote stewardship
          and accountability for space assigned to the unit; (d) Make space
          decisions that are consistent with the university’s master plan,
          strategic priorities, and/or other planning documents; (e) Manage
          space with the understanding that all units on campus are part of the
          university and do not have independent claim on space or facilities,
          regardless of current assignments and uses; (5) 3344-90-01 4 Program
          space analysis for current or new (re)allocation shall involve input
          from the university architect’s office as the record keeper of all
          space utilization across campus, in compliance with state- mandated
          categories. Program space analysis for current or new (re)allocation
          shall be coordinated with all affected parties and shall address
          logistics, availability, infrastructure, cost, programmatic needs,
          efficiency, and effectiveness; All affected parties should have input
          into space management requests/decisions; All space use is subject to
          annual efficient evaluation with a possible outcome of a different use
          being prescribed; and Some units and/or individuals may be subjected
          to a space-lease-productivity model if deemed appropriate or necessary
          by circumstances. (f) (g) (h) (i) (j) Policy Name: Policy Number:
          Board Approved: Effective: Prior Effective Dates: University space
          3344-90-01 05/20/2021 06/05/2021 07/07/2014, 01/11/2015, 03/19/2017
        </Text>
      </ScrollView>
      <TouchableOpacity
        style={styles.btnsave}
        onPress={() => {
          navigation.navigate('U_Setting');
        }}>
        <Text style={styles.txtsave}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: 'white',
  },
  btnsave: {
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#3074a4',

    width: '100%',
    alignSelf: 'center',
  },
  txtsave: {color: 'white', fontWeight: 'bold', fontSize: 24},
  txtpolicy: {
    color: 'black',
  },
});
export default U_Policy;
