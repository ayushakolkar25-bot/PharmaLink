import {
  createContext,
  createElement,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

import {
  users,
  type User,
  type Experience,
  type Education,
  type Research,
} from '../data/users'

interface AuthContextValue {
  currentUser: User | null
  isAuthenticated: boolean

  login: (user: User) => void
  logout: () => void

  updateProfile: (
    updates: Partial<User>,
  ) => void

  addExperience: (
    experience: Experience,
  ) => void

  updateExperience: (
    id: string,
    updates: Partial<Experience>,
  ) => void

  deleteExperience: (
    id: string,
  ) => void

  addEducation: (
    education: Education,
  ) => void

  updateEducation: (
    id: string,
    updates: Partial<Education>,
  ) => void

  deleteEducation: (
    id: string,
  ) => void

  addResearch: (
    research: Research,
  ) => void

  updateResearch: (
    id: string,
    updates: Partial<Research>,
  ) => void

  deleteResearch: (
    id: string,
  ) => void

  addSkill: (
    skill: string,
  ) => void

  removeSkill: (
    skill: string,
  ) => void

  connectToUser: (
    userId: string,
  ) => void
}

const AuthContext =
  createContext<AuthContextValue | null>(
    null,
  )

const STORAGE_KEY =
  'pharmalink_current_user'

function getInitialUser(): User | null {
  try {
    const storedUser =
      localStorage.getItem(
        STORAGE_KEY,
      )

    if (storedUser) {
      return JSON.parse(
        storedUser,
      ) as User
    }

    return (
      users.find(
        (user) =>
          user.id === 'user-001',
      ) ?? null
    )
  } catch {
    return (
      users.find(
        (user) =>
          user.id === 'user-001',
      ) ?? null
    )
  }
}

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({
  children,
}: AuthProviderProps) {
  const [
    currentUser,
    setCurrentUser,
  ] = useState<User | null>(
    getInitialUser,
  )

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(
          currentUser,
        ),
      )
    } else {
      localStorage.removeItem(
        STORAGE_KEY,
      )
    }
  }, [currentUser])

  function login(user: User) {
    setCurrentUser(user)
  }

  function logout() {
    setCurrentUser(null)
  }

  function updateProfile(
    updates: Partial<User>,
  ) {
    setCurrentUser(
      (currentUser) => {
        if (!currentUser) {
          return null
        }

        return {
          ...currentUser,
          ...updates,
        }
      },
    )
  }

  function addExperience(
    experience: Experience,
  ) {
    setCurrentUser(
      (currentUser) => {
        if (!currentUser) {
          return null
        }

        return {
          ...currentUser,
          experience: [
            ...currentUser.experience,
            experience,
          ],
        }
      },
    )
  }

  function updateExperience(
    id: string,
    updates: Partial<Experience>,
  ) {
    setCurrentUser(
      (currentUser) => {
        if (!currentUser) {
          return null
        }

        return {
          ...currentUser,
          experience:
            currentUser.experience.map(
              (experience) =>
                experience.id === id
                  ? {
                      ...experience,
                      ...updates,
                    }
                  : experience,
            ),
        }
      },
    )
  }

  function deleteExperience(
    id: string,
  ) {
    setCurrentUser(
      (currentUser) => {
        if (!currentUser) {
          return null
        }

        return {
          ...currentUser,
          experience:
            currentUser.experience.filter(
              (experience) =>
                experience.id !== id,
            ),
        }
      },
    )
  }

  function addEducation(
    education: Education,
  ) {
    setCurrentUser(
      (currentUser) => {
        if (!currentUser) {
          return null
        }

        return {
          ...currentUser,
          education: [
            ...currentUser.education,
            education,
          ],
        }
      },
    )
  }

  function updateEducation(
    id: string,
    updates: Partial<Education>,
  ) {
    setCurrentUser(
      (currentUser) => {
        if (!currentUser) {
          return null
        }

        return {
          ...currentUser,
          education:
            currentUser.education.map(
              (education) =>
                education.id === id
                  ? {
                      ...education,
                      ...updates,
                    }
                  : education,
            ),
        }
      },
    )
  }

  function deleteEducation(
    id: string,
  ) {
    setCurrentUser(
      (currentUser) => {
        if (!currentUser) {
          return null
        }

        return {
          ...currentUser,
          education:
            currentUser.education.filter(
              (education) =>
                education.id !== id,
            ),
        }
      },
    )
  }

  function addResearch(
    research: Research,
  ) {
    setCurrentUser(
      (currentUser) => {
        if (!currentUser) {
          return null
        }

        return {
          ...currentUser,
          research: [
            ...currentUser.research,
            research,
          ],
        }
      },
    )
  }

  function updateResearch(
    id: string,
    updates: Partial<Research>,
  ) {
    setCurrentUser(
      (currentUser) => {
        if (!currentUser) {
          return null
        }

        return {
          ...currentUser,
          research:
            currentUser.research.map(
              (research) =>
                research.id === id
                  ? {
                      ...research,
                      ...updates,
                    }
                  : research,
            ),
        }
      },
    )
  }

  function deleteResearch(
    id: string,
  ) {
    setCurrentUser(
      (currentUser) => {
        if (!currentUser) {
          return null
        }

        return {
          ...currentUser,
          research:
            currentUser.research.filter(
              (research) =>
                research.id !== id,
            ),
        }
      },
    )
  }

  function addSkill(
    skill: string,
  ) {
    const cleanSkill =
      skill.trim()

    if (!cleanSkill) {
      return
    }

    setCurrentUser(
      (currentUser) => {
        if (!currentUser) {
          return null
        }

        const alreadyExists =
          currentUser.skills.some(
            (existingSkill) =>
              existingSkill.toLowerCase() ===
              cleanSkill.toLowerCase(),
          )

        if (alreadyExists) {
          return currentUser
        }

        return {
          ...currentUser,
          skills: [
            ...currentUser.skills,
            cleanSkill,
          ],
        }
      },
    )
  }

  function removeSkill(
    skill: string,
  ) {
    setCurrentUser(
      (currentUser) => {
        if (!currentUser) {
          return null
        }

        return {
          ...currentUser,
          skills:
            currentUser.skills.filter(
              (existingSkill) =>
                existingSkill !== skill,
            ),
        }
      },
    )
  }

  function connectToUser(
    userId: string,
  ) {
    console.log(
      `Connection request sent to ${userId}`,
    )

    setCurrentUser(
      (currentUser) => {
        if (!currentUser) {
          return null
        }

        return {
          ...currentUser,
          connections:
            currentUser.connections + 1,
        }
      },
    )
  }

  const value: AuthContextValue = {
    currentUser,

    isAuthenticated:
      currentUser !== null,

    login,
    logout,

    updateProfile,

    addExperience,
    updateExperience,
    deleteExperience,

    addEducation,
    updateEducation,
    deleteEducation,

    addResearch,
    updateResearch,
    deleteResearch,

    addSkill,
    removeSkill,

    connectToUser,
  }

  return createElement(
    AuthContext.Provider,
    { value },
    children,
  )
}

export function useAuthStore() {
  const context =
    useContext(AuthContext)

  if (context === null) {
    throw new Error(
      'useAuthStore must be used inside AuthProvider.',
    )
  }

  return context
}