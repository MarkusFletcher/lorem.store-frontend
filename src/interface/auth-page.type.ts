import { NextPage } from 'next'

export type TypeRoles = {
	forUserOnly?: boolean
}

export type NextPageAuth<P = {}> = NextPage<P> & TypeRoles

export type TypeComponentAuthFields = {
	Component: TypeRoles
}
