import React, { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
} from "@chakra-ui/react";

const Main = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("name");

  const getUsers = async () => {
    const res = await fetch(
      `https://addictive-media-backend.herokuapp.com/api/get-users?filter=${filter}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await res.json();
    setUsers(data.results);
  };

  useEffect(() => {
    getUsers();
  }, [filter, users]);

  return (
    <main>
      <select
        name="filter"
        placeholder="Sort By"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      >
        <option value="name">Name</option>
        <option value="date">Date</option>
      </select>
      <TableContainer>
        <Table variant={"simple"}>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>DOB</Th>
              <Th>Country</Th>
              <Th>Resume</Th>
              <Th>DELETE</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) => {
              return (
                <Tr key={user.id}>
                  <Td>{user.name}</Td>
                  <Td>{user.dob}</Td>
                  <Td>{user.country}</Td>
                  <Td>
                    {console.log(user.resume)}
                    <a
                      href={`https://addictive-media-backend.herokuapp.com/files/${user.resume}`}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Link
                    </a>
                  </Td>
                  <Td>
                    <Button
                      onClick={async () => {
                        const res = await fetch(
                          `https://addictive-media-backend.herokuapp.com/api/delete-user`,
                          {
                            method: "DELETE",
                            headers: {
                              "Content-type": "application/json",
                            },
                            body: JSON.stringify({ id: user.id }),
                          }
                        );
                        const data = await res.json();
                        console.log(data);
                      }}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </main>
  );
};

export default Main;
