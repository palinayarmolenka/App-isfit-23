import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import FAQComponent from '../components/FAQComponent';

export default function FAQScreen() {

  const questions = [
    {
      key: 1,
      title: "Entering Samfundet",
      data: "Samfundet can be entered through the main entrance or Luka (the glass entrance).",
    },
    {
      key: 2,
      title: "Membership at Samfundet",
      data: "As a participant, you are considered a member of Studentersamfundet. You will get membership prices on events, food and drinks. You will also get free entrance to Samfundet. You can identify yourself with your festival wristband."
    },
    {
      key: 3,
      title: "What to do if you have questions",
      data: "If you have any questions, please direct them to the volunteers with ISFiT t-shirts or call Trafoen. The staff at Samfundet cannot answer questions regarding the festival."
    },
    {
      key: 4,
      title: "Events",
      data: "A lot of events are free of charge for you as a participant. Tickets for events with fees can be purchased at samfundet.no. Info about events can also be found at samfundet.no or in the events menu right here in the app!"
    },
    {
      key: 5,
      title: "Lost and found",
      data: "Items lost and found at Samfundet can be collected in Luka at Samfundet. Opening hours: 4:30 pm - 7:30 pm (Monday-Saturday)"
    },
    {
      key: 6,
      title: "Alcohol inside Studentersamfundet",
      data: "You can't bring your own alcohol to Studentersamfundet, or any other public place. All alcoholic beverages must be purchased at the location. You can't bring any alcoholic beverage into or out of the bars. It's also illegal to drink in public places like parks and bus stops."
    },
    {
      key: 7,
      title: "The Opening Ceremony",
      data: "Dress code: Galla/national costume \nThe Opening Ceremony will happen Thursday 9th of February at Studentersamfundet.\n Welcome to Trondheim and ISFiT 2023! The Opening Ceremony kicks off the Festival and gathers all the participants and volunteers for a grand opening! The show takes place at Studentersamfundet where we meet for an evening of music, speeches and dances! We look forward to meeting you!"
    },
    {
      key: 8,
      title: "The Student Peace Prize Ceremony",
      data: "Dress code: Galla/national costume \nSunday 12th of February, we invite you to highlight and celebrate DOXA Magazine, the winner of the Student Peace Prize and their work. The Peace Prize ceremony is held in Olavshallen - Trondheims largest cultural center - and will be a night to remember!"
    },
    {
      key: 9,
      title: "The Closing Ceremony",
      data: "Dress code: Galla/national costume \nSunday 19th of February, as the festival comes to an end, what better way to gather participants and volunteers to honor what we have accomplished together? This evening we will fill Studentersamfundet one last time to celebrate the ISFiT-23!"
    },
    {
      key: 10,
      title: "Trafoen",
      data: "Location: Klæbuveien 1 \nPhysical opening hours: 08:00 - 23:00 \nTrafoen is the red square building between Samfundet and Gløshaugen. During the festival Trafoen will serve as your information central, and will be open all day. If you arrive on the 7th or 9th of February, you can check in at Trafoen and get your host information there."
    },
    {
      key: 11,
      title: "Handling the cold weather",
      data: "If your host is unable to lend you warm clothes, you can visit Trafoen. We will keep an emergency pile of warm clothing available for you. Remember to return everything you borrow by the end of the festival, both to your host and to Trafoen!"
    },
    {
      key: 12,
      title: "Help and someone to talk to",
      data: "If you need help or someone to talk to, contact Trafoen. We can put you in touch with a medic, a mental health professional, a priest, etc. Trafoen will also assist you with any other issue you may have."
    },
    {
      key: 13,
      title: "Transport",
      data: "As a participant of ISFiT, you can travel with the line buses, night buses, and the tram for free in Trondheim. Information about the bus routes can be found in the AtB Reise app. The app can be downloaded from App Store for iPhone and Googlen Play Store for Android. Your wristband serves as your ticket. Note that the night buses only run during the weekend. On weekdays the latest buses go around 00:30 am, while on weekends (Friday and Saturday night) the last ones go around 03:00 am from Samfundet. You will be able to view the bus routes in real time in the app."
    },
    {
      key: 14,
      title: "Host",
      data: "All participants are signed up with a host for the festival, which will be your home for the entire festival. If you have any questions about your host, you can find the host team's phone number on isfit.org. Your host will also provide you with breakfast."
    },
    {
      key: 15,
      title: "Drink the tap water",
      data: "The tap water is clean and safe to drink. Don't buy new water in the store every time you get thirsty, just refill a bottle. This will save money and the environment."
    },
    {
      key: 16,
      title: "Pant your bottles",
      data: "If you have some empty bottles you don't need, don't throw them away. You can recycle them through a system we call panting. Using a machine found in most grocery stores, you can put in your bottles and cans and get some money for it. This is good for both the environment and your economy."
    },
    {
      key: 17,
      title: "Put on a jacket",
      data: "February is a winter month, and the outside can be both cold and wet. Don't let this ruin your day, and dress accordingly."
    },
    {
      key: 18,
      title: "Have fun and meet new people",
      data: "You are a participant at the biggest international student festival in the world, this is a unique opportunity to meet new and interesting friends from all around the world. So, enjoy yourself and have a great time."
    },
    {
      key: 19,
      title: "Don't smoke indoors",
      data: "It is illegal to smoke inside any building, apartment, bar, club, pub, etc. If you want to smoke, you have to go outside on the street. Smoking indoors will lead to an expensive fine."
    },
    {
      key: 20,
      title: "Don't throw toilet paper in the trash",
      data: "You can flush the toilet paper in the toilet in every house and public bathroom. Paper towels, napkins and tampons are not flushable and have to go in the trash."
    },
    {
      key: 21,
      title: "Walk of Peace",
      data: "On the 12th of February, the participants and volunteers of ISFiT gather for the Walk of Peace, a parade with torches through the city of Trondheim, leading up to the Student Peace Prize Ceremony. The walk goes from Samfundet to the venue of the Ceremony, Olavshallen. \nThe Walk of Peace is arranged to raise awareness for the the cause of DOXA Magazine and their work, as well as for world peace in general. Let's fill the streets of Trondheim with love, peace, and light."
    },
    {
      key: 22,
      title: "Emergency",
      data: "If there is an emergency you should call: \n113 for ambulance \n112 for police \n110 for fire department \n116 117 for Emergency Room \nIf you have and emergency, please contact Trafoen as well! \n\nThe hospital in Trondheim is located across the road from Studentersamfundet. If you have a smaller incident, contact the Emergency Room BEFORE you go there. The Emergency Room is located at the hospital and they don't have drop-in service. If you are in need of a bandaid or something similar, go to Trafoen."
    },
  ];

  const renderAccordians = () => {
    const items = [];
    for (item of questions) {
      items.push(
        <FAQComponent
          key={item.key}
          title={item.title}
          data={item.data}
        />
      );
    }
    return items;
  }

  return (
    <ScrollView style={styles.container}>
      {renderAccordians()}
    </ScrollView>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#0197CC',
  }
});