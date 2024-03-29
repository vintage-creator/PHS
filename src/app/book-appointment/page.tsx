"use client";

import H6Heading from "@/components/headings/H6Heading";
import Layout from "@/components/layout";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Calendar from "moedim";
import Button from "@/components/button";
import Modal from "@/components/modal";
import Success from "@/components/appointment/success";

const timeSlots = [
  "08:00AM",
  "09:00AM",
  "10:00AM",
  "11:00AM",
  "12:00PM",
  "01:00PM",
  "02:00PM",
  "03:00PM",
  "04:00PM",
  "05:00PM",
  "06:00PM",
  "07:00PM",
];

const BookAppointment = () => {
  const [Appointment, setAppointment] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedService, setSelectedService] = useState("");
  const [address, setAddress] = useState("");
  const [value, setValue] = useState(new Date());

  console.log("Booking", {
    selectedTime: selectedTime,
    selectedService: selectedService,
    address: address,
    date: value,
  });

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const HandleAppointment = () => {
    setAppointment(true);
  };
  
  const HandleClose = () => {
    setAppointment(false);
  };

  return (
    <Layout>
      <div className="px-6 lg:px-[123px] py-[24px] lg:py-[52px]">
        <H6Heading className="text-center font-[600] ">
          Book an appointment
        </H6Heading>
        <p
          className={`text-[16px] text-center lg:text-[18px] mt-[8px] lg:mt-[4px]`}
        >
          Please select a day and time for your service
        </p>

        <div className="lg:flex lg:items-center lg:gap-[24px] h-full w-full lg:mt-[52px]">
          <div className="mt-[24px] lg:mt-0 p-[28px] bg-blue100 rounded-[10px] w-full h-[350px]">
            <h5 className="text-center font-[600] lg:text-[18px]">
              Personal Details
            </h5>
            <p
              className={`text-[16px] text-center lg:text-[16px] mt-[8px] lg:mt-[4px]`}
            >
              Please fill out your details correctly
            </p>
            <div className="mt-[32px]">
              <div className="relative">
                <select
                  value={selectedService}
                  onChange={handleServiceChange}
                  disabled={false}
                  className="rounded-[10px] outline-none py-[16px] px-[24px] w-full text-[12px] lg:text-[14px] border border-primary bg-transparent appearance-none"
                >
                  <option value="" disabled>
                    Choose a service
                  </option>
                  <option value="Painting">Painting</option>
                  <option value="Tiling">Tiling</option>
                  <option value="Carpentry">Carpentry</option>
                  <option value="Drywall Repairs">Drywall Repairs</option>
                  <option value="TV Mounting">TV Mounting</option>
                  <option value="General Household Maintenance">
                    General Household Maintenance
                  </option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <span className="text-primary mr-[22px]">
                    {selectedService ? (
                      <IoIosArrowDown size={15} color="#000" />
                    ) : (
                      <IoIosArrowUp size={15} color="#000" />
                    )}
                  </span>
                </div>
              </div>

              <input
                type={"text"}
                value={address}
                onChange={handleAddressChange}
                disabled={false}
                placeholder="Address"
                className="py-[16px] px-[24px] w-full  text-[12px] lg:text-[14px] outline-none mt-[24px] border border-primary rounded-[10px]"
              />
            </div>
          </div>

          <div className="w-full bg-blue100 p-[28px] mt-[48px] lg:mt-0  h-[350px] rounded-[10px]">
            <p className={`text-[16px] text-center lg:text-[18px] `}>
              Please pick a date for your service
            </p>

            <div className="mt-[16px] flex items-center w-full justify-center">
              <Calendar value={value} onChange={(d) => setValue(d)} />
            </div>
          </div>
        </div>

        <div className="mt-[48px] ">
          <h4 className="text-center font-[600] lg:text-[28px]">Time</h4>
          <p
            className={`text-[16px] text-center lg:text-[18px] mt-[8px] lg:mt-[4px]`}
          >
            Pick a time for your service
          </p>
          <div className="mt-[16px] flex flex-row flex-wrap gap-[20px] w-full">
            {timeSlots.map((timeSlot, index) => (
              <div
                key={index}
                className={`rounded-[30px] border p-4 ${
                  selectedTime === timeSlot
                    ? "border-primary text-primary"
                    : "border"
                }`}
                onClick={() => handleTimeClick(timeSlot)}
              >
                {timeSlot}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full  flex items-center justify-center mt-[48px] lg:mt-[72px]">
          <Button
            text="Book"
            onClick={HandleAppointment}
            className="w-full text-white text-[16px] lg:text-[18px] lg:w-[40%] font-[700]"
          />
        </div>
      </div>

      {Appointment && (
        <Modal>
          <Success HandleClose={HandleClose} />
        </Modal>
      )}
    </Layout>
  );
};

export default BookAppointment;

// book-appointment